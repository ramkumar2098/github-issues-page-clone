import React, { useContext } from 'react';
import { SearchQueryContext } from '../Container';
import style from './SearchField.module.css';

function SearchField({ styles }) {
  const searchField = {
    display: styles.display,
  };

  const input = {
    width: styles.width,
    marginBottom: styles.marginBottom,
  };

  const { searchQuery, setSearchQuery } = useContext(SearchQueryContext);

  const handleFocus = e => {
    e.target.classList.remove(style.blur);
    e.target.classList.add(style.focus);
  };

  const handleBlur = e => {
    e.target.classList.remove(style.focus);
    e.target.classList.add(style.blur);
  };

  return (
    <span className={style.searchField} style={searchField}>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search or jump to..."
        onChange={e => setSearchQuery(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${style.input} ${style.blur}`}
        style={input}
      />
    </span>
  );
}

export default SearchField;
