import React from 'react';
import IssuesStates from './IssuesStates';
import IssuesToolbar from './IssuesToolbar';
import style from './RepoContent.module.css';

function RepoContent() {
  return (
    <div className={style.repoContent}>
      <IssuesStates />
      <IssuesToolbar />
      <div>
        asdadasadsasdasddasdadasadsasdasddasdadasadsasdasddasdadasadsasdasdd
      </div>
    </div>
  );
}

export default RepoContent;
