import React, { useState, useEffect } from 'react';
import DropdownCaret from '../dropdownCaret/DropdownCaret';
import SelectMenu from './SelectMenu';
import style from './ToolbarItem.module.css';

function ToolbarItem(props) {
  const { textContent } = props;

  const [displayMenu, setDisplayMenu] = useState(false);
  const closeMenu = () => setDisplayMenu(false);

  useEffect(() => {
    const theEvent = e =>
      (!e.target.matches(
        '.toolbarItem, .toolbarItem *, .selectMenuModal, .selectMenuModal *'
      ) ||
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
    <a
      href="#"
      onClick={e =>
        !e.target.matches('.selectMenuModal, .selectMenuModal *') &&
        setDisplayMenu(!displayMenu)
      }
      className={style.toolbarItem + ' toolbarItem'}
    >
      <div className={style.textContent}>
        <span>{textContent}</span>
        <DropdownCaret />
      </div>
      {displayMenu && <SelectMenu closeMenu={closeMenu} {...props} />}
    </a>
  );
}

export default ToolbarItem;
