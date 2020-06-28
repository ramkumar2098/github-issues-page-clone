import React from 'react';
import SearchField from '../searchField/SearchField';
import NavBarItems from './navBarItems/NavBarItems';

function NavBar() {
  return (
    <div>
      <SearchField styles={{ display: 'flex', width: '100%' }} />
      <NavBarItems />
    </div>
  );
}

export default NavBar;
