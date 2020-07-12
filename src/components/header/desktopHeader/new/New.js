import React from 'react';
import PlusSVG from 'SVGs/PlusSVG';
import Dropdown from '../../../dropdown/Dropdown';
import style from './New.module.css';

function New() {
  return (
    <a href="#" className={style.plus}>
      <PlusSVG />
      <Dropdown />
    </a>
  );
}

export default New;
