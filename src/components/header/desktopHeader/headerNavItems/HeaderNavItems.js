import React from 'react';
import NavItems from '../../navItems/NavItems';
import style from './HeaderNavItems.module.css';

function HeaderNavItems() {
  return (
    <span className={style.navBarItems}>
      <NavItems />
    </span>
  );
}

export default HeaderNavItems;
