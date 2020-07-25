import React, { useRef, useEffect } from 'react';
import CodeSVG from 'SVGs/CodeSVG';
import Issues from './issues/Issues';
import PullRequests from './pullRequests/PullRequests';
import RepoNavItem from './repoNavItem/RepoNavItem';
import { repoNavItems } from 'data/repoNavItems';
import style from './RepoNav.module.css';

const repoNavItem = {
  Icon: CodeSVG,
  repoNavItem: 'Code',
};

function RepoNav({ displayIcon }) {
  const navItemsRef = useRef([]);

  useEffect(() => {
    console.log(navItemsRef.current);
  });

  return (
    <div className={style.repoNav}>
      <RepoNavItem repoNavItem={repoNavItem} displayIcon={displayIcon} />
      <Issues displayIcon={displayIcon} />
      <PullRequests displayIcon={displayIcon} />
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
