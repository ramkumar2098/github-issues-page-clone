import React from 'react';
import NavItems from '../../navItems/NavItems';
import UserName from './userName/UserName';
import SignOut from './signOut/SignOut';
import style from './BurgerMenuItems.module.css';

function BurgerMenuItems() {
  return (
    <div className={style.burgerMenuItems}>
      <a href="#">Dashboard</a>
      <NavItems />
      <UserName />
      <SignOut />
    </div>
  );
}

export default BurgerMenuItems;
