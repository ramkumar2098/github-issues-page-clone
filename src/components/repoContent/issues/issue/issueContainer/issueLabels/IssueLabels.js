import React from 'react';
import style from './IssueLabels.module.css';

function IssueLabels({ issue, displayTitle, styles }) {
  const { issueLabels } = issue;

  return (
    <div className={style.issueLabels}>
      {issueLabels.map(issueLabel => (
        <a
          href="#"
          key={issueLabel}
          title={
            (displayTitle && issueLabel === 'Status: Unconfirmed') ||
            (!displayTitle && issueLabel === 'Status: Unconfirmed')
              ? "A potential issue that we haven't yet confirmed as a bug"
              : displayTitle
              ? issueLabel
              : null
          }
          className={style.issueLabel}
          style={{ ...issueLabelStyle(issueLabel), ...styles }}
        >
          {issueLabel}
        </a>
      ))}
    </div>
  );
}

export default IssueLabels;

function issueLabelStyle(issueLabel) {
  switch (issueLabel) {
    case 'Status: Unconfirmed':
      return { backgroundColor: '#d4c5f9' };
    case 'Component: Developer Tools':
      return { backgroundColor: '#fbca04' };
    case 'Resolution: Needs More Information':
      return { backgroundColor: '#fffde7' };
    case 'Component: ESLint Rules':
      return { backgroundColor: '#f7afdb' };
    case 'Component: DOM':
      return { backgroundColor: '#fef2c0' };
    case 'Type: Bug':
      return { backgroundColor: '#b60205', color: '#fff' };
    case 'Component: Build Infrastructure':
      return { backgroundColor: '#f9d0c4' };
    case 'Type: Discussion':
      return { backgroundColor: '#fef2c0' };
    default:
      return;
  }
}
