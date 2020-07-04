import React from 'react';
import CodeSVG from '../../../SVGs/CodeSVG';
import Issues from './issues/Issues';
import PullRequests from './pullRequests/PullRequests';
import RepoNavItem from './repoNavItem/RepoNavItem';
import { repoNavItems } from '../../../data/repoNavItems';
import { v4 as uuidv4 } from 'uuid';
import style from './RepoNav.module.css';

const repoNavItem = {
  Icon: CodeSVG,
  textContent: 'Code',
};

function RepoNav({ displayIcon }) {
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
