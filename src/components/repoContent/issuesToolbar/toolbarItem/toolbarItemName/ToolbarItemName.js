import React from 'react';
import DropdownCaret from 'components/dropdownCaret/DropdownCaret';
import style from './ToolbarItemName.module.css';

function ToolbarItemName({ toolbarItem }) {
  const { toolbarItemName } = toolbarItem;

  return (
    <span className={style.toolbarItemName}>
      <span>{toolbarItemName}</span>
      <DropdownCaret color="#444d56" />
    </span>
  );
}

export default ToolbarItemName;
