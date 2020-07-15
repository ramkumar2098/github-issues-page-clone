import React, { useEffect, useRef } from 'react';
import LocationSVG from 'SVGs/LocationSVG';
import CommitSVG from 'SVGs/CommitSVG';
import HeartSVG from 'SVGs/HeartSVG';
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
    avatar,
    isPro,
    userName,
    userID,
    userProfile,
    location,
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
      {(statusEmoji || status) && (
        <div className={style.status}>
          {statusEmoji && <img src={statusEmoji} />}
          {status && <span>{status}</span>}
        </div>
      )}
      <div className={style.main}>
        <div>
          <img src={avatar} />
          {isPro && <span className={style.pro}>PRO</span>}
        </div>
        <div className={style.userDetails}>
          <div>
            {userName && (
              <a href="#" className={style.userName}>
                {userName}
              </a>
            )}
            {userID && (
              <a
                href="#"
                className={(() => (userName ? style.userID : style.userName))()}
              >
                {userID}
              </a>
            )}
          </div>
          {userProfile && (
            <div className={style.userProfile}>{userProfile}</div>
          )}
          {location && (
            <div className={style.location}>
              <LocationSVG />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
      {hasCommittedToThisRepositoryInThePastWeek && (
        <div className={style.commit}>
          <CommitSVG />
          <span>Committed to this repository in the past week</span>
        </div>
      )}
      {hasSponsor && (
        <div className={style.sponsor}>
          <a href="#">
            <span>
              <HeartSVG />
              <span>Sponsor</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}

export default UserPopover;
