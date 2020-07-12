import React from 'react';
import IssuesStates from './issuesStates/IssuesStates';
import IssuesToolbar from './issuesToolbar/IssuesToolbar';
import Issues from './issues/Issues';
import style from './RepoContent.module.css';

function RepoContent() {
  return (
    <div className={style.repoContent}>
      <div>
        <IssuesStates />
        <IssuesToolbar />
      </div>
      <Issues />
    </div>
  );
}

export default RepoContent;
