import React from 'react';
import CloseSVG from '../../SVGs/CloseSVG';
import style from './SelectMenuHeader.module.css';

function SelectMenuHeader({ textContent, closeMenu }) {
  return (
    <div className={style.selectMenuHeader}>
      <span className={style.selectMenuTitle}>
        Filter by {textContent.toLowerCase()}
      </span>
      <button onClick={closeMenu} className={style.selectMenuCloseButton}>
        <CloseSVG />
      </button>
    </div>
  );
}

export default SelectMenuHeader;
