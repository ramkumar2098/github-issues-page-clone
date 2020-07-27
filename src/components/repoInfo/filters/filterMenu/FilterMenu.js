import React, { useEffect } from 'react';
import FilterModalHeader from './filterModalHeader/FilterModalHeader';
import FilterModalList from './filterModalList/FilterModalList';
import style from './FilterMenu.module.css';

function FilterMenu({ closeModal }) {
  useEffect(() => {
    const handleEvent = e =>
      (e.keyCode === 27 ||
        (!e.keyCode &&
          !e.target.matches('.filterContent, .filterContent *'))) &&
      closeModal();

    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, handleEvent);
    });

    return () =>
      ['click', 'keyup'].forEach(event => {
        window.removeEventListener(event, handleEvent);
      });
  }, []);

  return (
    <div className={style.filterModal}>
      <div className={style.filterContent + ' filterContent'}>
        <FilterModalHeader closeModal={closeModal} />
        <FilterModalList />
      </div>
    </div>
  );
}

export default FilterMenu;
