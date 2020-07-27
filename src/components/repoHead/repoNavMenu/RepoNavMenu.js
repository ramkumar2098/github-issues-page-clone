import React from 'react';
import RepoNavMenuItem from './repoNavMenuItem/RepoNavMenuItem';
import { repoNavItems } from 'data/repoNavItems';
import style from './RepoNavMenu.module.css';

function RepoNavMenu({ menuRef, menuItemsRef }) {
  return (
    <ul
      ref={menuRef}
      className={style.repoNavMenu + ' repoNavMenu'}
      style={{ display: 'none' }}
    >
      {repoNavItems.map(({ repoNavItem }, i) => (
        <RepoNavMenuItem
          key={repoNavItem}
          menuItemRef={menuItem => (menuItemsRef.current[i] = menuItem)}
          repoNavItem={repoNavItem}
        />
      ))}
    </ul>
  );
}

export default RepoNavMenu;
