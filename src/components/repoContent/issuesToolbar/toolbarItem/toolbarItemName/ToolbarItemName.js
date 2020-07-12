import React from 'react';
import DropdownCaret from '../../../../dropdownCaret/DropdownCaret';
import style from './ToolbarItemName.module.css';

function ToolbarItemName({ textContent }) {
  return (
    <span className={style.toolbarItemName}>
      <span>{textContent}</span>
      <DropdownCaret />
    </span>
  );
}

export default ToolbarItemName;