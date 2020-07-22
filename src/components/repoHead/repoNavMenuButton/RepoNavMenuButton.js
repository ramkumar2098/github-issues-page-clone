import React from 'react';
import Overlay from 'components/overlay/Overlay';
import HorizontalKebabSVG from 'SVGs/HorizontalKebabSVG';
import style from './RepoNavMenuButton.module.css';

function RepoNavMenuButton({ displayRepoNavMenu, toggleRepoNavMenu }) {
  return (
    <>
      {displayRepoNavMenu && <Overlay />}
      <a
        href="#"
        onClick={toggleRepoNavMenu}
        className={style.menuButton + ' menuButton'}
      >
        <HorizontalKebabSVG />
      </a>
    </>
  );
}

export default RepoNavMenuButton;
