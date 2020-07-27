import React from 'react';
import CloseSVG from 'SVGs/CloseSVG';
import style from './SelectMenuHeader.module.css';

function SelectMenuHeader({ toolbarItem, closeMenu }) {
  const { header } = toolbarItem;

  return (
    <div className={style.selectMenuHeader}>
      <span className={style.selectMenuTitle}>{header}</span>
      <button onClick={closeMenu} className={style.selectMenuCloseButton}>
        <CloseSVG />
      </button>
    </div>
  );
}

export default SelectMenuHeader;
