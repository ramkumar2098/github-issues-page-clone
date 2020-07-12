import React from 'react';
import IssuesSVG from 'SVGs/IssuesSVG';
import style from './IssuesIcon.module.css';

function IssuesIcon() {
  return (
    <div className={style.issuesIcon}>
      <IssuesSVG />
    </div>
  );
}

export default IssuesIcon;
