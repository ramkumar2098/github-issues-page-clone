import React from 'react';
import NavItems from './navItems/NavItems';
import UserName from './userName/UserName';
import SignOut from './signOut/SignOut';
import style from './NavBarItems.module.css';

function NavBarItems() {
  return (
    <div className={style.navBarItems}>
      <a href="#">Dashboard</a>
      <NavItems />
      <UserName />
      <SignOut />
    </div>
  );
}

export default NavBarItems;
