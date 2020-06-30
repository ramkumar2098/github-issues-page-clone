import React, { useState } from 'react';
import CodeSVG from '../SVGs/CodeSVG';
import Issues from './Issues';
import PullRequests from './PullRequests';
import RepoNavItem from './RepoNavItem';
import { repoNavItems } from '../data/repoNavItems';
import { v4 as uuidv4 } from 'uuid';
import style from './RepoNav.module.css';

const repoNavItem = {
  Icon: CodeSVG,
  textContent: 'Code',
};

function RepoNav() {
  const mediaQ = window.matchMedia('(min-width: 540px)');
  const [displayIcon, setDisplayIcon] = useState(mediaQ.matches);
  mediaQ.onchange = () => setDisplayIcon(mediaQ.matches);

  return (
    <div className={style.repoNav}>
      <RepoNavItem repoNavItem={repoNavItem} displayIcon={displayIcon} />
      <Issues displayIcon={displayIcon} />
      <PullRequests displayIcon={displayIcon} />
      {repoNavItems.map(repoNavItem => (
        <RepoNavItem
          key={uuidv4()}
          repoNavItem={repoNavItem}
          displayIcon={displayIcon}
        />
      ))}
    </div>
  );
}

export default RepoNav;
