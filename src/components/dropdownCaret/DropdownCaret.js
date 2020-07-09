import React from 'react';
import style from './DropdownCaret.module.css';

function DropdownCaret({ color }) {
  return <span className={style.dropdownCaret} style={{ color }}></span>;
}

export default DropdownCaret;
