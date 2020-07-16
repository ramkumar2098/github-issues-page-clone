import React from 'react';
import IssuesSVG from 'SVGs/IssuesSVG';
import style from './IssuesIcon.module.css';

function IssuesIcon({ padding }) {
  return (
    <div className={style.issuesIcon} style={{ padding }}>
      <IssuesSVG />
    </div>
  );
}

export default IssuesIcon;
