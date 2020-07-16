import React from 'react';
import style from './IssuePopoverTitle.module.css';

function IssuePopoverTitle({ issue }) {
  const { issueTitle, issueNo } = issue;

  return (
    <a href="#" className={style.issuePopoverTitle}>
      <span>{issueTitle}</span>
      <span> {issueNo}</span>
    </a>
  );
}

export default IssuePopoverTitle;
