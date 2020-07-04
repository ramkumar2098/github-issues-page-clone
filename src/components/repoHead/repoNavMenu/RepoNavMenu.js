import React from 'react';
import RepoNavMenuItem from './repoNavMenuItem/RepoNavMenuItem';
import { repoNavMenuItems } from '../../../data/repoNavMenuItems';
import { v4 as uuid } from 'uuid';
import style from './RepoNavMenu.module.css';

function RepoNavMenu({ displayIcon }) {
  return (
    <ul className={style.repoNavMenu + ' repoNavMenu'}>
      {repoNavMenuItems.map((repoNavMenuItem, index) =>
        displayIcon ? (
          <RepoNavMenuItem key={uuid()} repoNavMenuItem={repoNavMenuItem} />
        ) : index > 3 ? (
          <RepoNavMenuItem key={uuid()} repoNavMenuItem={repoNavMenuItem} />
        ) : null
      )}
    </ul>
  );
}

export default RepoNavMenu;
