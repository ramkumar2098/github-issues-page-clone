import React, { useEffect, useRef } from 'react';
import Overlay from 'components/overlay/Overlay';
import DropdownCaret from 'components/dropdownCaret/DropdownCaret';
import style from './FilterButton.module.css';

function FilterButton({ displayModal, openModal }) {
  const filterBtnRef = useRef();

  useEffect(() => {
    displayModal
      ? (filterBtnRef.current.style.backgroundColor = '#f3f4f6')
      : (filterBtnRef.current.style.backgroundColor = '#fafbfc');
  }, [displayModal]);

  return (
    <>
      {displayModal && <Overlay />}
      <button
        ref={filterBtnRef}
        onClick={openModal}
        onMouseDown={e => e.preventDefault()}
        className={style.filterBtn}
      >
        <span>Filters</span>
        <DropdownCaret color="#444d56" />
      </button>
    </>
  );
}

export default FilterButton;
