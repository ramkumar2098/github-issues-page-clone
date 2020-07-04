import React from 'react';
import style from './NewIssue.module.css';

function NewIssue({ displayCount }) {
  return (
    <a href="#" className={style.newIssue}>
      <span>{displayCount ? 'New issue' : 'New'}</span>
    </a>
  );
}

export default NewIssue;
