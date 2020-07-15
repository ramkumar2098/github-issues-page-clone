import React, { useEffect, useRef } from 'react';
import IssuesSVG from 'SVGs/IssuesSVG';
import style from './IssuePopover.module.css';

function IssuePopover(props) {
  const {
    bottom,
    left,
    issuePopoverOffset,
    keepIssuePopoverOpen,
    closeIssuePopover,
  } = props;

  const {
    issueOpenedOn,
    issueTitle,
    issueNo,
    issueDescription,
    issueLabels,
  } = props.issue;

  const issuePopoverRef = useRef();

  useEffect(() => {
    issuePopoverOffset(issuePopoverRef.current);
  }, []);

  return (
    <div
      ref={issuePopoverRef}
      onMouseOver={keepIssuePopoverOpen}
      onMouseLeave={closeIssuePopover}
      className={`${style.issuePopover} ${(() =>
        bottom && style.positionPopoverAtTop)()}`}
      style={(() => (bottom ? { bottom, left } : { left }))()}
    >
      <div className={style.issueHeader}>
        <a href="#">facebook/react</a>
        <span> {issueOpenedOn}</span>
      </div>
      <div className={style.issueBody}>
        <div className={style.issueIcon}>
          <IssuesSVG />
        </div>
        <div>
          <a href="#" className={style.issueTitle}>
            <span>{issueTitle}</span>
            <span> {issueNo}</span>
          </a>
          <div className={style.issueDescription}>{issueDescription}</div>
          {issueLabels.length ? (
            <div className={style.issueLabels}>
              {issueLabels.map(issueLabel => (
                <a
                  href="#"
                  className={style.issueLabel}
                  style={issueLabelStyle(issueLabel)}
                >
                  {issueLabel}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default IssuePopover;

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
