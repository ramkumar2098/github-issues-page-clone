import React from 'react';
import IssuesStates from './issuesStates/IssuesStates';
import IssuesToolbar from './issuesToolbar/IssuesToolbar';
import style from './RepoContent.module.css';

function RepoContent() {
  return (
    <div className={style.repoContent}>
      <div>
        <IssuesStates />
        <IssuesToolbar />
      </div>
    </div>
  );
}

export default RepoContent;
