import React, { useState, useRef } from 'react';
import IssuePopover from './issuePopover/IssuePopover';
import IssueLabels from './issueLabels/IssueLabels';
import UserPopover from './userPopover/UserPopover';
import style from './IssueContainer.module.css';

function IssuesContainer(props) {
  const { issueTitle, issueNo, issueOpened, userID } = props.issue;

  const [bottom, setBottom] = useState(null);
  const [issuePopoverLeft, setIssuePopoverLeft] = useState(null);
  const [userPopoverLeft, setUserPopoverLeft] = useState(null);
  const [top, setTop] = useState(null);

  const [displayIssuePopover, setDisplayIssuePopover] = useState(false);
  const [displayUserPopover, setDisplayUserPopover] = useState(false);

  const issueTitleRef = useRef();
  const userIDRef = useRef();

  const issuePopoverOffset = issuePopover => {
    const issueContainer = issueTitleRef.current.parentElement;
    const rect = issueContainer.getBoundingClientRect();
    const issueContainerHeight = rect.bottom - rect.top;

    const popover = issuePopover;
    const rect1 = popover.getBoundingClientRect();
    const popoverHeight = rect1.bottom - rect1.top;

    const element = issueTitleRef.current;
    const rect2 = element.getBoundingClientRect();
    const elementPosition = rect2.top - 12;

    const elementWidth = rect2.right - rect2.left;
    setIssuePopoverLeft(elementWidth / 2);

    popoverHeight < elementPosition
      ? setBottom(issueContainerHeight)
      : setBottom(null);
  };

  let id;

  const handleMouseOver = () => {
    id = setTimeout(() => {
      setDisplayIssuePopover(true);
    }, 200);
  };

  let issuePopoverID;

  const handleMouseOut = () => {
    clearTimeout(id);

    issuePopoverID = setTimeout(() => {
      setDisplayIssuePopover(false);
    }, 200);
  };

  const userPopoverOffset = userPopover => {
    const issueContainer = userIDRef.current.parentElement.parentElement;
    const rect = issueContainer.getBoundingClientRect();
    const issueContainerHeight = rect.bottom - rect.top;

    const popover = userPopover;
    const rect1 = popover.getBoundingClientRect();
    const popoverHeight = rect1.bottom - rect1.top;

    const element = userIDRef.current;
    const rect2 = element.getBoundingClientRect();
    const elementPosition = rect2.top - 12;

    const elemposition = rect2.right - (rect2.right - rect2.left) / 2;
    setUserPopoverLeft(elemposition - rect.left);

    popoverHeight > elementPosition
      ? setTop(issueContainerHeight)
      : setTop(null);
  };

  let id2;

  const handleMouseOver2 = () => {
    id2 = setTimeout(() => {
      setDisplayUserPopover(true);
    }, 200);
  };

  let userPopoverID;

  const handleMouseOut2 = () => {
    clearTimeout(id2);

    userPopoverID = setTimeout(() => {
      setDisplayUserPopover(false);
    }, 200);
  };

  return (
    <div className={style.issueContainer}>
      <a
        href="#"
        ref={issueTitleRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={style.issueTitle}
      >
        {issueTitle}
      </a>
      {displayIssuePopover && (
        <IssuePopover
          {...props}
          bottom={bottom && bottom + 4}
          left={issuePopoverLeft}
          issuePopoverOffset={issuePopoverOffset}
          keepIssuePopoverOpen={() => clearTimeout(issuePopoverID)}
          closeIssuePopover={() => setDisplayIssuePopover(false)}
        />
      )}
      <IssueLabels {...props} />
      <div className={style.issueOpened}>
        <span>
          {issueNo} opened {issueOpened} by{' '}
        </span>
        <a
          href="#"
          ref={userIDRef}
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
        >
          {userID}
        </a>
        {displayUserPopover && (
          <UserPopover
            {...props}
            top={top && top + 3}
            left={userPopoverLeft}
            userPopoverOffset={userPopoverOffset}
            keepUserPopoverOpen={() => clearTimeout(userPopoverID)}
            closeUserPopover={() => setDisplayUserPopover(false)}
          />
        )}
      </div>
      <a href="#" className={style.overlay}></a>
    </div>
  );
}

export default IssuesContainer;
