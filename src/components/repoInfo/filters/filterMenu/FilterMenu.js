import React from 'react';
import { useAttachEvents } from 'hooks/useAttachEvents';
import FilterModalHeader from './filterModalHeader/FilterModalHeader';
import FilterModalList from './filterModalList/FilterModalList';
import style from './FilterMenu.module.css';

function FilterMenu({ closeMenu }) {
  useAttachEvents('filterMenuModal', closeMenu);

  return (
    <div className={style.filterMenu}>
      <div className={style.filterMenuModal + ' filterMenuModal'}>
        <FilterModalHeader closeMenu={closeMenu} />
        <FilterModalList />
      </div>
    </div>
  );
}

export default FilterMenu;
