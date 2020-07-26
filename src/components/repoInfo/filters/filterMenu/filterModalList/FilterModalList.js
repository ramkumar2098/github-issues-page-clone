import React from 'react';
import { filterModalList } from 'data/filterModalList';
import style from './FilterModalList.module.css';

function FilterModalList() {
  return (
    <div className={style.modalList}>
      {filterModalList.map(({ Icon, listItem }) => (
        <a href="#" key={listItem}>
          {Icon && <Icon />}
          <span>{listItem}</span>
        </a>
      ))}
    </div>
  );
}

export default FilterModalList;
