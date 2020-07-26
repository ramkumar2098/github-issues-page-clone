import React, { useState, useEffect, useRef } from 'react';
import RepoTitle from './repoTitle/RepoTitle';
import RepoActions from './repoActions/RepoActions';
import RepoNav from './repoNav/RepoNav';
import RepoNavMenuButton from './repoNavMenuButton/RepoNavMenuButton';
import RepoNavMenu from './repoNavMenu/RepoNavMenu';
import style from './RepoHead.module.css';

function RepoHead() {
  const [displayRepoNavMenu, setDisplayRepoNavMenu] = useState(false);

  const mediaQ = window.matchMedia('(min-width: 544px)');
  const [displayIcon, setDisplayIcon] = useState(mediaQ.matches);
  mediaQ.onchange = () => setDisplayIcon(mediaQ.matches);

  useEffect(() => {
    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, e => {
        (!e.target.matches(
          '.menuButton, .menuButton *, .repoNavMenu, .repoNavMenu *'
        ) ||
          e.keyCode === 27) &&
          (menuRef.current.style.display = 'none') &&
          setDisplayRepoNavMenu(false);
      });
    });
  }, []);

  const navButtonRef = useRef();
  const navItemsRef = useRef([]);
  const menuRef = useRef();
  const menuItemsRef = useRef([]);
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
    const menuItems = menuItemsRef.current;

    navItems.forEach((navItem, i) => {
      if (navItemsRight[i] > navBtnLeft) {
        navItem.style.display = 'none';
        menuItems[i].style.display = 'block';
        navButtonRef.current.style.visibility = 'visible';
        menuRef.current.style.visibility = 'visible';
      } else {
        navItem.style.display = 'block';
        menuItems[i].style.display = 'none';
        navButtonRef.current.style.visibility = 'hidden';
        menuRef.current.style.visibility = 'hidden';
      }
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
  }, []);

  return (
    <div className={style.repoHead}>
      <div>
        <RepoTitle />
        <RepoActions />
      </div>
      <div>
        <RepoNav
          navItemsRef={navItemsRef}
          navButtonRef={navButtonRef}
          displayIcon={displayIcon}
        />
        <RepoNavMenuButton
          navButtonRef={navButtonRef}
          menuRef={menuRef}
          displayRepoNavMenu={displayRepoNavMenu}
          toggleRepoNavMenu={() => setDisplayRepoNavMenu(!displayRepoNavMenu)}
        />
      </div>
      <RepoNavMenu
        menuRef={menuRef}
        menuItemsRef={menuItemsRef}
        displayIcon={displayIcon}
      />
    </div>
  );
}

export default RepoHead;
