import React, { useState, useRef } from 'react';
import FilterButton from './filterButton/FilterButton';
import FilterMenu from './filterMenu/FilterMenu';
import FilterSearch from './filterSearch/FilterSearch';
import style from './Filters.module.css';

function Filters() {
  const [displayModal, setDisplayModal] = useState(false);
  const [value, setValue] = useState('is:issue is:open ');
  const inputRef = useRef();

  return (
    <div className={style.filters}>
      <FilterButton
        displayModal={displayModal}
        openModal={() => setDisplayModal(true)}
      />
      {displayModal && (
        <FilterMenu
          displayModal={displayModal}
          closeModal={() => setDisplayModal(false)}
        />
      )}
      <FilterSearch
        value={value}
        inputRef={inputRef}
        handleChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default Filters;
