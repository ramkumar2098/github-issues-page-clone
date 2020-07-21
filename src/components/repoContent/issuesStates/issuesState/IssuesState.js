import React from 'react';
import style from './IssuesState.module.css';

function IssuesState({ issuesState }) {
  const { className, Icon, state } = issuesState;

  return (
    <a href="#" className={style.issuesState + ' ' + style[className]}>
      <Icon />
      <span>{state}</span>
    </a>
  );
}

export default IssuesState;
