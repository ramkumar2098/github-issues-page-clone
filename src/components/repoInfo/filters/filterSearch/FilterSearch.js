import React from 'react';
import SearchSVG from 'SVGs/SearchSVG';
import style from './FilterSearch.module.css';

function FilterSearch({ inputRef, value, handleChange }) {
  return (
    <div className={style.filterSearch}>
      <span
        onClick={() => inputRef.current.focus()}
        className={style.searchIcon}
      >
        <SearchSVG />
      </span>
      <input
        type="text"
        ref={inputRef}
        className={style.input}
        placeholder="Search all issues"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterSearch;
