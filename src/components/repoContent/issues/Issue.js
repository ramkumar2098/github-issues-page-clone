import React from 'react';
import IssuesIcon from './IssuesIcon';
import IssueContainer from './IssueContainer';
import IssueDetails from './IssueDetails';
import style from './Issue.module.css';

function Issue(props) {
  return (
    <div className={style.issue}>
      <IssuesIcon />
      <IssueContainer {...props} />
      <IssueDetails {...props} />
    </div>
  );
}

export default Issue;
