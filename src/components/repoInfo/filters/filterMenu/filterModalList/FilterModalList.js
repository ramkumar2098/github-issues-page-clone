import React from 'react';
import FilterModalListItems from './filterModalListItems/FilterModalListItems';
import ExternalLinkSVG from '../../../../../SVGs/ExternalLinkSVG';
import style from './FilterModalList.module.css';

function FilterModalList() {
  return (
    <ul className={style.modalList}>
      <FilterModalListItems />
      <li>
        <a href="#">
          <ExternalLinkSVG />
          <span>View advanced search syntax</span>
        </a>
      </li>
    </ul>
  );
}

export default FilterModalList;
