import React from 'react';
import style from './RepoNavItem.module.css';

function RepoNavItem({ navItemRef, repoNavItem: props, displayIcon }) {
  const { Icon, repoNavItem } = props;

  return (
    <div ref={navItemRef} className={style.repoNavItem + ' repoNavItem'}>
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
