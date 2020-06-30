import React from 'react';
import IssuesSVG from '../SVGs/IssuesSVG';
import style from './RepoNavItem.module.css';

function Issues({ displayIcon }) {
  return (
    <div className={style.repoNavItem}>
      <a href="#" className={style.issues}>
        {displayIcon && <IssuesSVG />}
        <span
          style={(() =>
            displayIcon
              ? { marginLeft: '6px', fontWeight: 600 }
              : { fontWeight: 600 })()}
        >
          Issues
        </span>
        <span className={style.count}>510</span>
      </a>
    </div>
  );
}

export default Issues;
