import React from 'react';
import PlusSVG from 'SVGs/PlusSVG';
import DropdownCaret from '../../../dropdownCaret/DropdownCaret';
import style from './New.module.css';

function New() {
  return (
    <a href="#" className={style.plus}>
      <PlusSVG />
      <DropdownCaret />
    </a>
  );
}

export default New;
