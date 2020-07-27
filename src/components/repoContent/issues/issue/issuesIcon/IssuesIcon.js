import React from 'react';
import IssuesSVG from 'SVGs/IssuesSVG';
import style from './IssuesIcon.module.css';
import { toolTip } from 'components/toolTip/toolTip.module.css';

function IssuesIcon({ padding }) {
  return (
    <div className={style.issuesIcon} style={{ padding }}>
      <span content="Open issue" className={toolTip}>
        <IssuesSVG />
      </span>
    </div>
  );
}

export default IssuesIcon;
