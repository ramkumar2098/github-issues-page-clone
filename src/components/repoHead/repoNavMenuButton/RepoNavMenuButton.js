import React from 'react';
import Overlay from 'components/overlay/Overlay';
import HorizontalKebabSVG from 'SVGs/HorizontalKebabSVG';
import style from './RepoNavMenuButton.module.css';

function RepoNavMenuButton({
  navButtonRef,
  menuRef,
  displayRepoNavMenu,
  toggleRepoNavMenu,
}) {
  return (
    <>
      {displayRepoNavMenu && <Overlay />}
      <a
        href="#"
        ref={navButtonRef}
        onClick={() => {
          toggleRepoNavMenu();
          menuRef.current.style.display === 'none'
            ? (menuRef.current.style.display = 'block')
            : (menuRef.current.style.display = 'none');
        }}
        className={style.menuButton + ' menuButton'}
      >
        <HorizontalKebabSVG />
      </a>
    </>
  );
}

export default RepoNavMenuButton;
