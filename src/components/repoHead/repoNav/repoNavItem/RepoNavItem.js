import React from 'react';
import style from './RepoNavItem.module.css';

function RepoNavItem({ repoNavItem, displayIcon }) {
  const { Icon, textContent } = repoNavItem;

  return (
    <div className={style.repoNavItem}>
      <a href="#" className={style.navLink}>
        {displayIcon && <Icon />}
        <span style={(() => (displayIcon ? { marginLeft: '8px' } : null))()}>
          {textContent}
        </span>
      </a>
    </div>
  );
}

export default RepoNavItem;
