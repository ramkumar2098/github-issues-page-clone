import React, { useState, useEffect } from 'react';
import DropdownCaret from '../dropdownCaret/DropdownCaret';
import style from './ToolbarItem.module.css';

function ToolbarItem(props) {
  const { textContent, classNames, SelectMenu } = props;
  const [toolbarItem, selectMenuModal] = classNames;

  const classList = [
    toolbarItem,
    toolbarItem + ' *',
    selectMenuModal,
    selectMenuModal + ' *',
  ];

  const [displayMenu, setDisplayMenu] = useState(false);
  const closeMenu = () => setDisplayMenu(false);

  useEffect(() => {
    const theEvent = e =>
      (!e.target.matches(classList.map(className => `.${className}`)) ||
        e.keyCode === 27) &&
      closeMenu();

    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, theEvent);
    });

    return () =>
      ['click', 'keyup'].forEach(event => {
        window.removeEventListener(event, theEvent);
      });
  }, []);

  return (
    <div style={{ padding: '0 16px' }}>
      <a
        href="#"
        onClick={e =>
          !e.target.matches(`.${selectMenuModal}, .${selectMenuModal} *`) &&
          setDisplayMenu(!displayMenu)
        }
        className={`${style.toolbarItem} ${toolbarItem}`}
      >
        <span className={style.textContent}>
          <span>{textContent}</span>
          <DropdownCaret />
        </span>
        {displayMenu && (
          <SelectMenu
            className={selectMenuModal}
            closeMenu={closeMenu}
            {...props}
          />
        )}
      </a>
    </div>
  );
}

export default ToolbarItem;
