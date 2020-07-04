import React from 'react';
import RepoAction from './repoAction/RepoAction';
import { repoActions } from '../../../data/repoActions';
import { v4 as uuidv4 } from 'uuid';
import style from './RepoActions.module.css';

function RepoActions() {
  return (
    <div className={style.repoActions}>
      {repoActions.map(repoAction => (
        <RepoAction key={uuidv4()} repoAction={repoAction} />
      ))}
    </div>
  );
}

export default RepoActions;
