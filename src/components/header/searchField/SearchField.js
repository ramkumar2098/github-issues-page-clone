import React, { useState, useRef, useEffect } from 'react';
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

  const [mouseOverDropdown, setMouseOverDropdown] = useState(false);

  const inputRef = useRef();
  const jumpToRef = useRef();

  useEffect(() => {
    if (!mouseOverDropdown && searchQuery.trim()) {
      const dropdownItems = document.querySelectorAll('.dropdownItem');
      dropdownItems.forEach(dropdownItem =>
        dropdownItem.classList.remove(style.highlight)
      );

      dropdownItems[0].classList.add(style.highlight);
    }
  }, [searchQuery]);

  useEffect(() => {
    inputRef.current.addEventListener('keyup', e => {
      if (e.keyCode === 40 || e.keyCode === 38) {
        const dropdownItems = [...document.querySelectorAll('.dropdownItem')];
        const highlightedElement = dropdownItems.filter(dropdownItem =>
          dropdownItem.classList.contains(style.highlight)
        );

        const indexOfHighlightedElement = dropdownItems.indexOf(
          highlightedElement[0]
        );

        const highlight = index => {
          dropdownItems[indexOfHighlightedElement].classList.remove(
            style.highlight
          );
          dropdownItems[index].classList.add(style.highlight);
        };

        return e.keyCode === 40
          ? dropdownItems.length === 1
            ? dropdownItems[0].classList.add(style.highlight)
            : indexOfHighlightedElement > -1 &&
              indexOfHighlightedElement < dropdownItems.length - 1
            ? highlight(indexOfHighlightedElement + 1)
            : null
          : e.keyCode === 38 && indexOfHighlightedElement > 0
          ? highlight(indexOfHighlightedElement - 1)
          : null;
      } else if (e.keyCode === 27) {
        inputRef.current.blur();
      }
    });
  }, []);

  return (
    <span className={style.searchField} style={searchField}>
      <input
        type="text"
        ref={inputRef}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search or jump to..."
        className={style.input}
        style={input}
      />
      <span onClick={() => inputRef.current.focus()} className={style.slash}>
        <SlashSVG />
      </span>
      <div className={style.dropdown}>
        <div
          onMouseOver={() => setMouseOverDropdown(true)}
          onMouseOut={() => setMouseOverDropdown(false)}
        >
          {searchDropdownItems.map(dropdownItem => (
            <DropdownItem
              key={dropdownItem.badge}
              dropdownItem={dropdownItem}
              searchQuery={searchQuery}
              jumpToRef={jumpToRef}
              removeHighlight={() => {
                const dropdownItems = document.querySelectorAll(
                  '.dropdownItem'
                );
                dropdownItems.forEach(dropdownItem =>
                  dropdownItem.classList.remove(style.highlight)
                );
              }}
              addHighlight={e => e.currentTarget.classList.add(style.highlight)}
            />
          ))}
        </div>
      </div>
    </span>
  );
}

export default SearchField;
