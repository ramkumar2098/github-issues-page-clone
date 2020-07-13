import React, { useState } from 'react';
import IssuePopover from './IssuePopover';
import UserPopover from './UserPopover';
import style from './IssueContainer.module.css';

function IssuesContainer() {
  const [positionPopoverAtBottom, setPositionPopoverAtBottom] = useState(false);
  const [issueContainerHeight, setIssueContainerHeight] = useState(0);

  const handleMouseOver = e => {
    const element = e.target;
    const rect = element.getBoundingClientRect();
    setPositionPopoverAtBottom(rect.top < 210);
  };

  const getIssueContainerHeight = e => {
    const issueContainer = e.target.parentElement.parentElement;
    const rect = issueContainer.getBoundingClientRect();

    const popover = e.target.nextSibling;
    const rect1 = popover.getBoundingClientRect();
    const popoverHeight = rect1.bottom - rect1.top;

    const userID = e.target;
    const rect2 = userID.getBoundingClientRect();
    const userIDPosition = rect2.top - 13;

    popoverHeight > userIDPosition
      ? setIssueContainerHeight(rect.bottom - rect.top)
      : setIssueContainerHeight(0);
  };

  return (
    <div className={style.issueContainer}>
      <a href="#" onMouseOver={handleMouseOver} className={style.issue}>
        Bug: DevTools extension component tree view crashes on empty Suspense
        element
      </a>
      <IssuePopover positionPopoverAtBottom={positionPopoverAtBottom} />
      <span className={style.issueLabels}>
        <a href="#" className={style.issueLabel}>
          Status: Unconfirmed
        </a>
      </span>
      <div className={style.issueOpened}>
        <span>#19320 opened 2 hours ago by</span>
        <a href="#" onMouseOver={getIssueContainerHeight}>
          {' '}
          Wedvich
        </a>
        <UserPopover top={issueContainerHeight && issueContainerHeight + 3} />
      </div>
      <a href="#" className={style.overlay}></a>
    </div>
  );
}

export default IssuesContainer;
