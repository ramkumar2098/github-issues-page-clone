import React, { useState, useEffect, useRef } from 'react';
import Overlay from 'components/overlay/Overlay';
import ToolbarItemName from './toolbarItemName/ToolbarItemName';
import SelectMenu from './selectMenu/SelectMenu';
import style from './ToolbarItem.module.css';

function ToolbarItem({ toolbarItem: props }) {
  const { classNames } = props;
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

  const toolbarItemRef = useRef();

  useEffect(() => {
    displayMenu
      ? (toolbarItemRef.current.style.color = '#24292e')
      : (toolbarItemRef.current.style.color = '#586069');
  }, [displayMenu]);

  return (
    <>
      {displayMenu && <Overlay />}
      <span style={{ padding: '0 16px' }}>
        <a
          href="#"
          ref={toolbarItemRef}
          onClick={e =>
            !e.target.matches(`.${selectMenuModal}, .${selectMenuModal} *`) &&
            setDisplayMenu(!displayMenu)
          }
          title={props.toolbarItem}
          className={`${style.toolbarItem} ${toolbarItem}`}
        >
          <ToolbarItemName {...props} />
          {displayMenu && (
            <SelectMenu
              {...props}
              className={selectMenuModal}
              closeMenu={closeMenu}
            />
          )}
        </a>
      </span>
    </>
  );
}

export default ToolbarItem;
