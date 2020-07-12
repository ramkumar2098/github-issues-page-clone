import React from 'react';
import style from './IssueContainer.module.css';

function IssuesContainer() {
  return (
    <div className={style.issueContainer}>
      <a href="#" className={style.issue}>
        Bug: DevTools extension component tree view crashes on empty Suspense
        element
      </a>
      <span className={style.issueLabels}>
        <a href="#" className={style.issueLabel}>
          Status: Unconfirmed
        </a>
      </span>
      <div className={style.issueOpened}>
        #19320 opened 2 hours ago by <a href="#">Wedvich</a>
      </div>
      <a href="#" className={style.overlay}></a>
    </div>
  );
}

export default IssuesContainer;
