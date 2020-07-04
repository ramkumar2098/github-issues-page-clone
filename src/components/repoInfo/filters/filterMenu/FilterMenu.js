import React from 'react';
import FilterModalHeader from './filterModalHeader/FilterModalHeader';
import FilterModalList from './filterModalList/FilterModalList';
import style from './FilterMenu.module.css';

function FilterMenu({ displayModal, closeModal }) {
  return (
    displayModal && (
      <div className={style.filterModal}>
        <div className={style.filterContent + ' filterContent'}>
          <FilterModalHeader closeModal={closeModal} />
          <FilterModalList />
        </div>
      </div>
    )
  );
}

export default FilterMenu;
