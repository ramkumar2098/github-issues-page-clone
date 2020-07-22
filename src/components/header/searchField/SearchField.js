import React from 'react';
import SlashSVG from 'SVGs/SlashSVG';
import { searchDropdownItems } from 'data/searchDropdownItems';
import DropdownItem from './dropdownItem/DropdownItem';
import style from './SearchField.module.css';

function SearchField({ styles, searchQuery, setSearchQuery }) {
  const searchField = {
    display: styles.display,
  };

  const input = {
    width: styles.width,
    marginBottom: styles.marginBottom,
  };

  return (
    <span className={style.searchField} style={searchField}>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search or jump to..."
        onChange={e => setSearchQuery(e.target.value)}
        className={style.input}
        style={input}
      />
      <SlashSVG />
      <div className={style.dropdown}>
        <div>
          {searchDropdownItems.map(dropdownItem => (
            <DropdownItem
              key={dropdownItem.badge}
              dropdownItem={dropdownItem}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </span>
  );
}

export default SearchField;

// slash onClick focus
