import React from 'react';
import { repoNavMenuItems } from '../data/repoNavMenuItems';
import { v4 as uuid } from 'uuid';
import style from './RepoNavMenu.module.css';

function RepoNavMenu() {
  return (
    <ul className={style.repoNavMenu}>
      {repoNavMenuItems.map(repoNavMenuItem => (
        <li key={uuid()}>
          <a href="#">{repoNavMenuItem}</a>
        </li>
      ))}
    </ul>
  );
}

export default RepoNavMenu;
