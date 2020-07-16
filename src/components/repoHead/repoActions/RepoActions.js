import React from 'react';
import RepoAction from './repoAction/RepoAction';
import { repoActions } from 'data/repoActions';
import style from './RepoActions.module.css';

function RepoActions() {
  return (
    <div className={style.repoActions}>
      {repoActions.map(repoAction => (
        <RepoAction key={repoAction.textContent} repoAction={repoAction} />
      ))}
    </div>
  );
}

export default RepoActions;
