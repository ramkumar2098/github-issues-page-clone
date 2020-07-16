import React from 'react';
import IssuesIcon from './issuesIcon/IssuesIcon';
import IssueContainer from './issueContainer/IssueContainer';
import IssueDetails from './issueDetails/IssueDetails';
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
