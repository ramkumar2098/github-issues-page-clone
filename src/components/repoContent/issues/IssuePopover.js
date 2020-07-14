import React from 'react';
import IssuesSVG from 'SVGs/IssuesSVG';
import style from './IssuePopover.module.css';

function IssuePopover({ bottom, left }) {
  return (
    <div
      className={`${style.issuePopover} ${(() =>
        bottom && style.positionPopoverAtTop)()}`}
      style={(() => (bottom ? { bottom, left } : { left }))()}
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
              Error: "Commit tree does not contain fiber 20379. This is a bug in
              React DevTools."
            </span>
            <span> #19320</span>
          </a>
          <div className={style.issueDescription}>
            Describe what you were doing when the bug occurred: I have a couple
            of material UI e…
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
