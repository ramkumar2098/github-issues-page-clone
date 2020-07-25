import React, { useRef, useEffect } from 'react';
import RepoNavItem from './repoNavItem/RepoNavItem';
import { repoNavItems } from 'data/repoNavItems';
import style from './RepoNav.module.css';

function RepoNav({ navButtonRef, displayIcon }) {
  const navItemsRef = useRef([]);
  const navItemsRightRef = useRef([]);
  const innerWidthLesserThan544pxRef = useRef();

  const navItems = navItemsRef.current;

  useEffect(() => {
    navItems.forEach(navItem => {
      const navItemRight = navItem.getBoundingClientRect().right;
      navItemsRightRef.current.push(navItemRight);
    });

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

    const navBtnLeft = navButtonRef.current.getBoundingClientRect().left;

    navItems.forEach((navItem, i) => {
      navItemsRight[i] > navBtnLeft
        ? (navItem.style.display = 'none')
        : (navItem.style.display = 'block');
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
  }, []);

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
