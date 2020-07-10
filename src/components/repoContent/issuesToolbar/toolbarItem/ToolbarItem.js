import React, { useState, useEffect } from 'react';
import DropdownCaret from '../../../dropdownCaret/DropdownCaret';
import SelectMenu from './selectMenu/SelectMenu';
import style from './ToolbarItem.module.css';

function ToolbarItem({ toolbarItem: props }) {
  const { textContent, classNames } = props;
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
    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, e => {
        (!e.target.matches(classList.map(className => `.${className}`)) ||
          e.keyCode === 27) &&
          closeMenu();
      });
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
            {...props}
            className={selectMenuModal}
            closeMenu={closeMenu}
          />
        )}
      </a>
    </div>
  );
}

export default ToolbarItem;
