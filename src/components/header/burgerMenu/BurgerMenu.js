import React from 'react';
import SearchField from '../searchField/SearchField';
import BurgerMenuItems from './burgerMenuItems/BurgerMenuItems';

function BurgerMenu(props) {
  return (
    <div style={{ backgroundColor: '#24292e' }}>
      <SearchField {...props} styles={{ display: 'flex', width: '100%' }} />
      <BurgerMenuItems />
    </div>
  );
}

export default BurgerMenu;
