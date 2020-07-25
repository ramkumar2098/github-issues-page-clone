import React, { useRef, useEffect } from 'react';
import Overlay from 'components/overlay/Overlay';
import HorizontalKebabSVG from 'SVGs/HorizontalKebabSVG';
import style from './RepoNavMenuButton.module.css';

function RepoNavMenuButton({ displayRepoNavMenu, toggleRepoNavMenu }) {
  const navButtonRef = useRef();
  const navItemsRightRef = useRef([]);
  const innerWidthLesserThan544pxRef = useRef();

  useEffect(() => {
    const navItems = document.querySelectorAll('.repoNavItem');
    navItems.forEach(navItem => {
      const navItemRight = navItem.getBoundingClientRect().right;
      navItemsRightRef.current.push(navItemRight);
    });

    navItems.forEach(navItem => (navItem.style.display = 'none'));
    innerWidthLesserThan544pxRef.current = window.innerWidth < 544;
    resize();
  }, []);

  const resize = () => {
    const navItemsRight =
      (innerWidthLesserThan544pxRef.current && window.innerWidth < 544) ||
      (!innerWidthLesserThan544pxRef.current && window.innerWidth > 544)
        ? navItemsRightRef.current
        : innerWidthLesserThan544pxRef.current && window.innerWidth > 544
        ? navItemsRightRef.current.map(
            (navItemRight, i) => navItemRight + 24 * (i + 1)
          )
        : navItemsRightRef.current.map(
            (navItemRight, i) => navItemRight - 24 * (i + 1)
          );

    const navItems = document.querySelectorAll('.repoNavItem');
    const navBtnLeft = navButtonRef.current.getBoundingClientRect().left;

    navItems.forEach((navItem, i) =>
      navItemsRight[i] > navBtnLeft
        ? (navItem.style.display = 'none')
        : (navItem.style.display = 'block')
    );
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
  }, []);

  return (
    <>
      {displayRepoNavMenu && <Overlay />}
      <a
        href="#"
        ref={navButtonRef}
        onClick={toggleRepoNavMenu}
        className={style.menuButton + ' menuButton'}
      >
        <HorizontalKebabSVG />
      </a>
    </>
  );
}

export default RepoNavMenuButton;
