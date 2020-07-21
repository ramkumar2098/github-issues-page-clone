import React from 'react';
import DropdownCaret from '../../../../dropdownCaret/DropdownCaret';
import style from './ToolbarItemName.module.css';

function ToolbarItemName({ toolbarItem }) {
  return (
    <span className={style.toolbarItemName}>
      <span>{toolbarItem}</span>
      <DropdownCaret color="#444d56" />
    </span>
  );
}

export default ToolbarItemName;
