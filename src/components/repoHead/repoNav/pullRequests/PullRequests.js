import React from 'react';
import PullRequestsSVG from '../../../../SVGs/PullRequestsSVG';
import style from '../repoNavItem/RepoNavItem.module.css';

function PullRequests({ displayIcon }) {
  return (
    <div className={style.repoNavItem}>
      <a href="#" className={style.navLink}>
        {displayIcon && <PullRequestsSVG />}
        <span style={(() => (displayIcon ? { marginLeft: '8px' } : null))()}>
          Pull requests
        </span>
        <span className={style.count}>132</span>
      </a>
    </div>
  );
}

export default PullRequests;