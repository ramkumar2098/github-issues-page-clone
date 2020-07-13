import React from 'react';
import IssuesIcon from './IssuesIcon';
import IssueContainer from './IssueContainer';
import IssueDetails from './IssueDetails';
import style from './Issue.module.css';

function Issue() {
  return (
    <div className={style.issue}>
      <IssuesIcon />
      <IssueContainer />
      <IssueDetails />
    </div>
  );
}

export default Issue;
