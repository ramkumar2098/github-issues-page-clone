import React, { useEffect } from 'react';
import MenuItem from '../../menuItem/MenuItem';
import { newMenuItems, newMenuItems2 } from 'data/newMenuItems';
import Divider from '../../divider/Divider';
import style from '../../menu/Menu.module.css';

function NewMenu({ closeNewMenu }) {
  useEffect(() => {
    const handleEvent = e =>
      (e.keyCode === 27 ||
        (!e.keyCode && !e.target.matches('.newMenu, .newMenu *'))) &&
      closeNewMenu();

    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, handleEvent);
    });

    return () =>
      ['click', 'keyup'].forEach(event => {
        window.removeEventListener(event, handleEvent);
      });
  }, []);

  return (
    <ul className={style.menu + ' newMenu'}>
      {newMenuItems.map(newMenuItem => (
        <MenuItem key={newMenuItem} menuItem={newMenuItem} />
      ))}
      <Divider />
      <div className={style.thisRepository}>This repository</div>
      {newMenuItems2.map(newMenuItem => (
        <MenuItem key={newMenuItem} menuItem={newMenuItem} />
      ))}
    </ul>
  );
}

export default NewMenu;
