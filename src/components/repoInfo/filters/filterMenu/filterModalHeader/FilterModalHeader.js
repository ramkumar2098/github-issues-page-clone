import React from 'react';
import CloseSVG from 'SVGs/CloseSVG';
import style from './FilterModalHeader.module.css';

function FilterModalHeader({ closeMenu }) {
  return (
    <div className={style.modalHeader}>
      <span>Filter Issues</span>
      <button onClick={closeMenu} className={style.close}>
        <CloseSVG />
      </button>
    </div>
  );
}

export default FilterModalHeader;
