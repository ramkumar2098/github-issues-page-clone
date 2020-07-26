import React from 'react';
import style from './DropdownItem.module.css';

function DropdownItem({
  dropdownItemsRef,
  dropdownItem,
  searchQuery,
  removeHighlight,
  addHighlight,
}) {
  const { Icon, badge } = dropdownItem;

  return (
    ((badge === 'Jump to' &&
      'facebook/react'.includes(searchQuery.trim().toLowerCase())) ||
      (badge !== 'Jump to' && searchQuery.trim())) && (
      <a
        href="#"
        ref={dropdownItemsRef}
        onMouseOver={removeHighlight}
        onMouseOut={addHighlight}
        className={style.dropdownItem + ' dropdownItem'}
      >
        <Icon />
        <div>
          <div className={style.searchQuery}>
            {badge === 'Jump to' ? 'facebook/react' : searchQuery}
          </div>
          <div
            className={style.badge}
            style={(() => (badge === 'Jump to' ? { display: 'none' } : null))()}
          >
            <span>{badge}</span>
            <span>↵</span>
          </div>
        </div>
      </a>
    )
  );
}

export default DropdownItem;
