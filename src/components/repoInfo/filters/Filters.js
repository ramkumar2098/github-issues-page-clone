import React, { useState, useRef } from 'react';
import FilterButton from './filterButton/FilterButton';
import FilterMenu from './filterMenu/FilterMenu';
import FilterSearch from './filterSearch/FilterSearch';
import style from './Filters.module.css';

function Filters() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [value, setValue] = useState('is:issue is:open ');
  const inputRef = useRef();

  return (
    <div className={style.filters}>
      <FilterButton
        displayMenu={displayMenu}
        openMenu={() => setDisplayMenu(true)}
      />
      {displayMenu && <FilterMenu closeMenu={() => setDisplayMenu(false)} />}
      <FilterSearch
        value={value}
        inputRef={inputRef}
        handleChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default Filters;
