import React from 'react';
import RepoNavMenuItem from './repoNavMenuItem/RepoNavMenuItem';
import { repoNavMenuItems } from 'data/repoNavMenuItems';
import style from './RepoNavMenu.module.css';

function RepoNavMenu({ displayIcon }) {
  return (
    <ul className={style.repoNavMenu + ' repoNavMenu'}>
      {repoNavMenuItems.map((repoNavMenuItem, index) =>
        displayIcon ? (
          <RepoNavMenuItem
            key={repoNavMenuItem}
            repoNavMenuItem={repoNavMenuItem}
          />
        ) : index > 3 ? (
          <RepoNavMenuItem
            key={repoNavMenuItem}
            repoNavMenuItem={repoNavMenuItem}
          />
        ) : null
      )}
    </ul>
  );
}

export default RepoNavMenu;
