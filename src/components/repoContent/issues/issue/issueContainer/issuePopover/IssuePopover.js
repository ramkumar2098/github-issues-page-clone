import React, { useEffect, useRef } from 'react';
import IssuePopoverHeader from './issuePopoverHeader/IssuePopoverHeader';
import IssuePopoverBody from './issuePopoverBody/IssuePopoverBody';
import style from './IssuePopover.module.css';

function IssuePopover(props) {
  const {
    bottom,
    left,
    issuePopoverOffset,
    keepIssuePopoverOpen,
    closeIssuePopover,
  } = props;

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
      <IssuePopoverHeader {...props} />
      <IssuePopoverBody {...props} />
    </div>
  );
}

export default IssuePopover;
