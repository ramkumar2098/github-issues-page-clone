import React, { useState, useEffect, useRef } from 'react';
import Overlay from 'components/overlay/Overlay';
import ToolbarItemName from './toolbarItemName/ToolbarItemName';
import SelectMenu from './selectMenu/SelectMenu';
import style from './ToolbarItem.module.css';

function ToolbarItem(props) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toolbarItemRef = useRef();

  useEffect(() => {
    displayMenu
      ? (toolbarItemRef.current.style.color = '#24292e')
      : (toolbarItemRef.current.style.color = '#586069');
  }, [displayMenu]);

  return (
    <>
      {displayMenu && <Overlay />}
      <span className={style.toolbarItem}>
        <a
          href="#"
          ref={toolbarItemRef}
          onClick={() => setDisplayMenu(true)}
          title={props.toolbarItem.toolbarItemName}
        >
          <ToolbarItemName {...props} />
        </a>
        {displayMenu && (
          <SelectMenu {...props} closeMenu={() => setDisplayMenu(false)} />
        )}
      </span>
    </>
  );
}

export default ToolbarItem;
