import React from 'react';
import DropdownCaret from '../../../dropdownCaret/DropdownCaret';
import style from './FilterButton.module.css';

function FilterButton({ toggleModal }) {
  return (
    <button onClick={toggleModal} className={style.filterBtn + ' filterBtn'}>
      <span>Filters</span>
      <DropdownCaret color="#444d56" />
    </button>
  );
}

export default FilterButton;
