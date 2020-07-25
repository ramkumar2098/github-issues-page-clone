import React from 'react';
import IssuesSVG from 'SVGs/IssuesSVG';
import { issuesCount } from 'data/issuesCount';
import style from '../repoNavItem/RepoNavItem.module.css';

function Issues({ displayIcon }) {
  return (
    <div className={style.repoNavItem + ' repoNavItem'}>
      <a href="#" className={style.issues}>
        {displayIcon && <IssuesSVG />}
        <span
          style={(() =>
            displayIcon
              ? { marginLeft: '8px', fontWeight: 600 }
              : { fontWeight: 600 })()}
        >
          Issues
        </span>
        <span title={issuesCount} className={style.count}>
          {issuesCount}
        </span>
      </a>
    </div>
  );
}

export default Issues;
