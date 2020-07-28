import React, { useRef } from 'react';
import SlashSVG from 'SVGs/SlashSVG';
import SearchDropdown from './searchDropdown/SearchDropdown';
import style from './SearchField.module.css';

function SearchField({ styles, searchQuery, setSearchQuery }) {
  const { display, width, marginBottom } = styles;

  const inputRef = useRef();

  return (
    <span className={style.searchField} style={{ display }}>
      <input
        type="text"
        ref={inputRef}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search or jump to..."
        className={style.input}
        style={{ width, marginBottom }}
      />
      <span onClick={() => inputRef.current.focus()} className={style.slash}>
        <SlashSVG />
      </span>
      <SearchDropdown inputRef={inputRef} searchQuery={searchQuery} />
    </span>
  );
}

export default SearchField;
