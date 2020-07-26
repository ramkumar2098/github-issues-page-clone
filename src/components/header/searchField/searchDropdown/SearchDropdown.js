import React, { useState, useRef, useEffect } from 'react';
import { searchDropdownItems } from 'data/searchDropdownItems';
import DropdownItem from './dropdownItem/DropdownItem';
import style from './SearchDropdown.module.css';

function SearchDropdown({ inputRef, searchQuery }) {
  const [mouseOverDropdown, setMouseOverDropdown] = useState(false);
  const dropdownItemsRef = useRef([]);

  useEffect(() => {
    if (!mouseOverDropdown && searchQuery.trim()) {
      const dropdownItems = dropdownItemsRef.current;
      dropdownItems.forEach(dropdownItem =>
        dropdownItem?.classList.remove(style.highlight)
      );

      dropdownItems[0].classList.add(style.highlight);
    }
  }, [searchQuery]);

  useEffect(() => {
    inputRef.current.addEventListener('keyup', e => {
      if (e.keyCode === 40 || e.keyCode === 38) {
        const dropdownItems = dropdownItemsRef.current.filter(
          dropdownItem => dropdownItem
        );

        const [highlightedElement] = dropdownItems.filter(dropdownItem =>
          dropdownItem.classList.contains(style.highlight)
        );

        const indexOfHighlightedElement = dropdownItems.indexOf(
          highlightedElement
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
    <div className={style.dropdown}>
      <div
        onMouseOver={() => setMouseOverDropdown(true)}
        onMouseOut={() => setMouseOverDropdown(false)}
      >
        {searchDropdownItems.map((dropdownItem, i) => (
          <DropdownItem
            key={dropdownItem.badge}
            dropdownItemsRef={dropdownItem =>
              (dropdownItemsRef.current[i] = dropdownItem)
            }
            dropdownItem={dropdownItem}
            searchQuery={searchQuery}
            removeHighlight={() => {
              dropdownItemsRef.current.forEach(dropdownItem =>
                dropdownItem?.classList.remove(style.highlight)
              );
            }}
            addHighlight={e => e.currentTarget.classList.add(style.highlight)}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchDropdown;
