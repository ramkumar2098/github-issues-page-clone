import React from 'react';
import RepoNavItem from './repoNavItem/RepoNavItem';
import { repoNavItems } from 'data/repoNavItems';
import style from './RepoNav.module.css';

function RepoNav({ navItemsRef, displayIcon }) {
  return (
    <div className={style.repoNav}>
      {repoNavItems.map((repoNavItem, i) => (
        <RepoNavItem
          key={repoNavItem.repoNavItem}
          navItemRef={navItem => (navItemsRef.current[i] = navItem)}
          repoNavItem={repoNavItem}
          displayIcon={displayIcon}
        />
      ))}
    </div>
  );
}

export default RepoNav;
