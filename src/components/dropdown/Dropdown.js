import React from 'react';
import style from './Dropdown.module.css';

function Dropdown({ color }) {
  return <span className={style.dropdown} style={{ color }}></span>;
}

export default Dropdown;
