import React from 'react';
import style from './IssuesState.module.css';

function IssuesState({ issuesState }) {
  const { className, Icon, textContent } = issuesState;

  return (
    <a href="#" className={style.issuesState + ' ' + style[className]}>
      <Icon />
      <span>{textContent}</span>
    </a>
  );
}

export default IssuesState;
