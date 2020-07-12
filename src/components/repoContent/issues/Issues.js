import React from 'react';
import IssuesIcon from './IssuesIcon';
import IssueContainer from './IssueContainer';
import IssueDetails from './IssueDetails';
import style from './Issues.module.css';

function Issues() {
  return (
    <div className={style.issues}>
      <div>
        <IssuesIcon />
        <IssueContainer />
        <IssueDetails />
      </div>
    </div>
  );
}

export default Issues;
