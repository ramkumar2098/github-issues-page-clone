import React, { useEffect } from 'react';
import WatchMenuItem from './watchMenuItem/WatchMenuItem';
import { watchMenuItems } from 'data/watchMenuItems';
import style from './WatchMenu.module.css';

function WatchMenu({ closeWatchMenu }) {
  useEffect(() => {
    const handleEvent = e =>
      (e.keyCode === 27 ||
        (!e.keyCode && !e.target.matches('.watchMenu, .watchMenu *'))) &&
      closeWatchMenu();

    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, handleEvent);
    });

    return () =>
      ['click', 'keyup'].forEach(event => {
        window.removeEventListener(event, handleEvent);
      });
  }, []);

  return (
    <div className={style.watchMenu + ' watchMenu'}>
      <div className={style.watchMenuHeader}>Notifications</div>
      {watchMenuItems.map(watchMenuItem => (
        <WatchMenuItem
          key={watchMenuItem.heading}
          watchMenuItem={watchMenuItem}
        />
      ))}
    </div>
  );
}

export default WatchMenu;
