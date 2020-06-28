import React from 'react';
import NavBarItem from './NavBarItem';
import { navBarItemsList } from '../data/navItemsList';
import { v4 as uuidv4 } from 'uuid';

function NavItems() {
  return (
    <>
      {navBarItemsList.map(navBarItem => (
        <NavBarItem key={uuidv4()} navBarItem={navBarItem} />
      ))}
    </>
  );
}

export default NavItems;
