import React, { useState } from 'react';
import IssuePopover from './IssuePopover';
import UserPopover from './UserPopover';
import style from './IssueContainer.module.css';

function IssuesContainer() {
  const [bottom, setBottom] = useState(null);
  const [issuePopoverLeft, setIssuePopoverLeft] = useState(null);
  const [userPopoverLeft, setUserPopoverLeft] = useState(null);
  const [top, setTop] = useState(null);

  const handleMouseOver = e => {
    const issueContainer = document.querySelector('.issueContainer');
    const rect = issueContainer.getBoundingClientRect();
    const issueContainerHeight = rect.bottom - rect.top;

    const popover = e.target.nextSibling;
    const rect1 = popover.getBoundingClientRect();
    const popoverHeight = rect1.bottom - rect1.top;

    const element = e.target;
    const rect2 = element.getBoundingClientRect();
    const elementPosition = rect2.top - 12;

    const elementWidth = rect2.right - rect2.left;
    setIssuePopoverLeft(elementWidth / 2);

    const elemposition = rect2.right - elementWidth / 2;
    setUserPopoverLeft(elemposition - rect.left);

    popoverHeight < elementPosition
      ? setBottom(issueContainerHeight)
      : setBottom(null);

    popoverHeight > elementPosition
      ? setTop(issueContainerHeight)
      : setTop(null);
  };

  return (
    <div className={style.issueContainer + ' issueContainer'}>
      <a href="#" onMouseOver={handleMouseOver} className={style.issueTitle}>
        Error: "Commit tree does not contain fiber 20379. This is a bug in React
        DevTools."
      </a>
      <IssuePopover bottom={bottom && bottom + 4} left={issuePopoverLeft} />
      <span className={style.issueLabels}>
        <a href="#" className={style.issueLabel}>
          Status: Unconfirmed
        </a>
      </span>
      <div className={style.issueOpened}>
        <span>#19320 opened 2 hours ago by</span>
        <a href="#" onMouseOver={handleMouseOver}>
          {' '}
          theBstar
        </a>
        <UserPopover top={top && top + 3} left={userPopoverLeft} />
      </div>
      <a href="#" className={style.overlay}></a>
    </div>
  );
}

export default IssuesContainer;
