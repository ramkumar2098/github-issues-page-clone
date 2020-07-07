import React from 'react';
import style from './IssuesState.module.css';

function IssuesState({ className, Icon, textContent }) {
  return (
    <a href="#" className={style.issuesState + ' ' + style[className]}>
      <Icon />
      <span>{textContent}</span>
    </a>
  );
}

export default IssuesState;
