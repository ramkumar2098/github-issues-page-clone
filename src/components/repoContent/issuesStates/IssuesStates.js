import React from 'react';
import IssuesState from './issuesState/IssuesState';
import { issuesStates } from 'data/issuesStates';
import style from './IssuesStates.module.css';

function IssuesStates() {
  return (
    <div className={style.issuesStates}>
      {issuesStates.map(issuesState => (
        <IssuesState key={issuesState.state} issuesState={issuesState} />
      ))}
    </div>
  );
}

export default IssuesStates;
