import React from 'react';
import style from './DropdownItem.module.css';

function DropdownItem({ dropdownItem, searchQuery }) {
  const { Icon, badge } = dropdownItem;

  return (
    (badge === 'Jump to' || searchQuery) && (
      <a href="#" className={style.dropdownItem + ' dropdownItem'}>
        <Icon />
        <span className={style.searchQuery}>
          {badge === 'Jump to' ? 'facebook/react' : searchQuery}
        </span>
        <span
          className={style.badge}
          style={(() => (badge === 'Jump to' ? { display: 'none' } : null))()}
        >
          <span>{badge}</span>
          <span>↵</span>
        </span>
      </a>
    )
  );
}

export default DropdownItem;
