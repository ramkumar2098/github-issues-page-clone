import React from 'react';
import IssuesState from './issuesState/IssuesState';
import { issuesStates } from 'data/issuesStates';
import { v4 as uuidv4 } from 'uuid';
import style from './IssuesStates.module.css';

function IssuesStates() {
  return (
    <div className={style.issuesStates}>
      {issuesStates.map(issuesState => (
        <IssuesState key={uuidv4()} issuesState={issuesState} />
      ))}
    </div>
  );
}

export default IssuesStates;
