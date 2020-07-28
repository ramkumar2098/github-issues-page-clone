import { useEffect } from 'react';

export function useAttachEvents(className, closeMenu) {
  useEffect(() => {
    const handleEvent = e =>
      (e.keyCode === 27 ||
        (!e.keyCode && !e.target.matches(`.${className}, .${className} *`))) &&
      closeMenu();

    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, handleEvent);
    });

    return () =>
      ['click', 'keyup'].forEach(event => {
        window.removeEventListener(event, handleEvent);
      });
  }, []);
}
