import React, { useEffect, useRef } from 'react';
import Status from './status/Status';
import UserPopoverBody from './userPopoverBody/UserPopoverBody';
import Commit from './commit/Commit';
import Sponsor from './sponsor/Sponsor';
import style from './UserPopover.module.css';

function UserPopover(props) {
  const {
    top,
    left,
    userPopoverOffset,
    keepUserPopoverOpen,
    closeUserPopover,
  } = props;

  const {
    statusEmoji,
    status,
    hasCommittedToThisRepositoryInThePastWeek,
    hasSponsor,
  } = props.issue;

  const userPopoverRef = useRef();

  useEffect(() => {
    userPopoverOffset(userPopoverRef.current);
  }, []);

  return (
    <div
      ref={userPopoverRef}
      onMouseOver={keepUserPopoverOpen}
      onMouseLeave={closeUserPopover}
      className={`${style.userPopover} ${(() =>
        top && style.positionPopoverAtBottom)()}`}
      style={(() => (top ? { top, left } : { left }))()}
    >
      {(statusEmoji || status) && <Status {...props} />}
      <UserPopoverBody {...props} />
      {hasCommittedToThisRepositoryInThePastWeek && <Commit />}
      {hasSponsor && <Sponsor />}
    </div>
  );
}

export default UserPopover;
