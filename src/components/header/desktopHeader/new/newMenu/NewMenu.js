import React from 'react';
import MenuItem from '../../menuItem/MenuItem';
import { newMenuItems, newMenuItems2 } from 'data/newMenuItems';
import Divider from '../../divider/Divider';
import style from '../../menu/Menu.module.css';

function NewMenu() {
  return (
    <ul className={style.menu}>
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
