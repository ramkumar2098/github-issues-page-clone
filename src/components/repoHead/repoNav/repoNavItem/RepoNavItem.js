import React from 'react';
import style from './RepoNavItem.module.css';

function RepoNavItem({ navItemRef, repoNavItem: props, displayIcon }) {
  const { Icon, repoNavItem, count } = props;

  return (
    <div ref={navItemRef} className={style.repoNavItem}>
      <a
        href="#"
        className={`${style.navLink} ${(() =>
          repoNavItem === 'Issues' && style.issues)()}`}
      >
        {displayIcon && <Icon />}
        <span style={(() => (displayIcon ? { marginLeft: '8px' } : null))()}>
          {repoNavItem}
        </span>
        {count && (
          <span title={count} className={style.count}>
            {count}
          </span>
        )}
      </a>
    </div>
  );
}

export default RepoNavItem;
