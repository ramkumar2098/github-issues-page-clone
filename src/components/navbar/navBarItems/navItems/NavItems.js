import React from 'react';
import { navItemsList } from '../../../../data/navItemsList';
import { v4 as uuidv4 } from 'uuid';

function NavItems() {
  return navItemsList.map(navBarItem => (
    <a href="#" key={uuidv4()}>
      {navBarItem}
    </a>
  ));
}

export default NavItems;
