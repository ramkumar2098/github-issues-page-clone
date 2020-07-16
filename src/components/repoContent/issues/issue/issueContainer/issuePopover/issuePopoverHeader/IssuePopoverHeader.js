import React from 'react';
import style from './IssuePopoverHeader.module.css';

function IssuePopoverHeader({ issue }) {
  const { issueOpenedOn } = issue;

  return (
    <div className={style.issuePopoverHeader}>
      <a href="#">facebook/react</a>
      <span> {issueOpenedOn}</span>
    </div>
  );
}

export default IssuePopoverHeader;
