import React from 'react';
import RepoNavMenuItem from './repoNavMenuItem/RepoNavMenuItem';
import { repoNavMenuItems } from 'data/repoNavMenuItems';
import style from './RepoNavMenu.module.css';

function RepoNavMenu({ menuRef, menuItemsRef }) {
  return (
    <ul
      ref={menuRef}
      className={style.repoNavMenu + ' repoNavMenu'}
      style={{ display: 'none' }}
    >
      {repoNavMenuItems.map((repoNavMenuItem, i) => (
        <RepoNavMenuItem
          key={repoNavMenuItem}
          menuItemRef={menuItem => (menuItemsRef.current[i] = menuItem)}
          repoNavMenuItem={repoNavMenuItem}
        />
      ))}
    </ul>
  );
}

export default RepoNavMenu;
