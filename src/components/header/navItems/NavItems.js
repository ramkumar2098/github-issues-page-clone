import React from 'react';
import { navItemsList } from 'data/navItemsList';

function NavItems() {
  return navItemsList.map(navBarItem => (
    <a href="#" key={navBarItem}>
      {navBarItem}
    </a>
  ));
}

export default NavItems;
