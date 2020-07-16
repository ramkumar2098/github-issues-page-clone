import React from 'react';
import style from './IssuePopoverDescription.module.css';

function IssuePopoverDescription({ issue }) {
  const { issueDescription } = issue;

  return (
    <div className={style.issuePopoverDescription}>{issueDescription}</div>
  );
}

export default IssuePopoverDescription;
