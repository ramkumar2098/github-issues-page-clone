import React from 'react';
import PullRequestsSVG from 'SVGs/PullRequestsSVG';
import { pullRequestsCount } from 'data/pullRequestsCount';
import style from '../repoNavItem/RepoNavItem.module.css';

function PullRequests({ displayIcon }) {
  return (
    <div className={style.repoNavItem + ' repoNavItem'}>
      <a href="#" className={style.navLink}>
        {displayIcon && <PullRequestsSVG />}
        <span style={(() => (displayIcon ? { marginLeft: '8px' } : null))()}>
          Pull requests
        </span>
        <span title={pullRequestsCount} className={style.count}>
          {pullRequestsCount}
        </span>
      </a>
    </div>
  );
}

export default PullRequests;
