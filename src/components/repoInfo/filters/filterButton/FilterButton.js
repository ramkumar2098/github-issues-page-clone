import React, { useEffect, useRef } from 'react';
import DropdownCaret from '../../../dropdownCaret/DropdownCaret';
import style from './FilterButton.module.css';

function FilterButton({ displayModal, toggleModal }) {
  const filterBtnRef = useRef();

  useEffect(() => {
    displayModal
      ? (filterBtnRef.current.style.backgroundColor = '#f3f4f6')
      : (filterBtnRef.current.style.backgroundColor = '#fafbfc');
  }, [displayModal]);

  return (
    <button
      ref={filterBtnRef}
      onClick={toggleModal}
      onMouseDown={e => e.preventDefault()}
      className={style.filterBtn + ' filterBtn'}
    >
      <span>Filters</span>
      <DropdownCaret color="#444d56" />
    </button>
  );
}

export default FilterButton;
