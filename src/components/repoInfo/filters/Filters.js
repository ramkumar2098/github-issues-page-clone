import React, { useState, useRef, useEffect } from 'react';
import FilterButton from './filterButton/FilterButton';
import FilterMenu from './filterMenu/FilterMenu';
import FilterSearch from './filterSearch/FilterSearch';
import style from './Filters.module.css';

function Filters() {
  const [value, setValue] = useState('is:issue is:open ');
  const inputRef = useRef();

  const [displayModal, setDisplayModal] = useState(false);
  const toggleModal = () => setDisplayModal(!displayModal);
  const closeModal = () => setDisplayModal(false);

  useEffect(() => {
    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, e => {
        (!e.target.matches(
          '.filterBtn, .filterBtn *, .filterContent, .filterContent *'
        ) ||
          e.keyCode === 27) &&
          closeModal();
      });
    });
  }, []);

  return (
    <div className={style.filters}>
      <FilterButton toggleModal={toggleModal} />
      <FilterMenu displayModal={displayModal} closeModal={closeModal} />
      <FilterSearch
        value={value}
        inputRef={inputRef}
        handleChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default Filters;
