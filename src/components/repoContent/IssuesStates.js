import React from 'react';
import IssuesSVG from '../../SVGs/IssuesSVG';
import CheckSVG from '../../SVGs/CheckSVG';
import style from './IssuesStates.module.css';
import IssuesState from './IssuesState';

function IssuesStates() {
  return (
    <div className={style.issuesStates}>
      <IssuesState
        className="issuesOpen"
        Icon={IssuesSVG}
        textContent="499 Open"
      />
      <IssuesState
        className="issuesClosed"
        Icon={CheckSVG}
        textContent="8,804 Closed"
      />
    </div>
  );
}

export default IssuesStates;
