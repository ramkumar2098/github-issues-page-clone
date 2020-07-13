import React from 'react';
import IssuesSVG from 'SVGs/IssuesSVG';
import style from './IssuePopover.module.css';

function IssuePopover({ positionPopoverAtBottom }) {
  return (
    <div
      className={`${style.issuePopover} ${(() =>
        positionPopoverAtBottom && style.positionPopoverAtBottom)()}`}
    >
      <div className={style.issueHeader}>
        <a href="#">facebook/react</a> on jul 11
      </div>
      <div className={style.issueBody}>
        <div className={style.issueIcon}>
          <IssuesSVG />
        </div>
        <div>
          <a href="#" className={style.issueTitle}>
            <span>
              Bug: DevTools extension component tree view crashes on empty
              Suspense element
            </span>
            <span> #19320</span>
          </a>
          <div className={style.issueDescription}>
            React version: 16.13.1 (also tested with versions down to 16.9.0)
            DevTools extension…
          </div>
          <div className={style.issueLabels}>
            <a href="#" className={style.issueLabel}>
              Status: Unconfirmed
            </a>
            <a href="#" className={style.issueLabel}>
              Status: Unconfirmed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssuePopover;
