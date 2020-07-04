import React from 'react';
import HorizontalKebabSVG from '../../../SVGs/HorizontalKebabSVG';
import style from './RepoNavMenuButton.module.css';

function RepoNavMenuButton({ toggleRepoNavMenu }) {
  return (
    <a
      href="#"
      onClick={toggleRepoNavMenu}
      className={style.menuButton + ' menuButton'}
    >
      <HorizontalKebabSVG />
    </a>
  );
}

export default RepoNavMenuButton;
