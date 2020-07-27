import React from 'react';
import style from './IssuesState.module.css';

function IssuesState({ issuesState }) {
  const { Icon, state } = issuesState;

  return (
    <a
      href="#"
      className={`${style.issuesState} ${(() =>
        state.includes('Open') ? style.issuesOpen : style.issuesClosed)()}`}
    >
      <Icon />
      <span>{state}</span>
    </a>
  );
}

export default IssuesState;
