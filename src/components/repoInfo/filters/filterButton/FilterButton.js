import React from 'react';
import Dropdown from '../../../dropdown/Dropdown';
import style from './FilterButton.module.css';

function FilterButton({ toggleModal }) {
  return (
    <button onClick={toggleModal} className={style.filterBtn + ' filterBtn'}>
      <span>Filters</span>
      <Dropdown color="#444d56" />
    </button>
  );
}

export default FilterButton;
