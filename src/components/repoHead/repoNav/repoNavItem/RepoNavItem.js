import React from 'react';
import style from './RepoNavItem.module.css';

function RepoNavItem({ repoNavItem: props, displayIcon }) {
  const { Icon, repoNavItem } = props;

  return (
    <div className={style.repoNavItem}>
      <a href="#" className={style.navLink}>
        {displayIcon && <Icon />}
        <span style={(() => (displayIcon ? { marginLeft: '8px' } : null))()}>
          {repoNavItem}
        </span>
      </a>
    </div>
  );
}

export default RepoNavItem;
