import React from 'react';
import statusEmoji from 'images/octocat.png';
import avatar from 'images/avatar.png';
import LocationSVG from 'SVGs/LocationSVG';
import CommitSVG from 'SVGs/CommitSVG';
import HeartSVG from 'SVGs/HeartSVG';
import style from './UserPopover.module.css';

function UserPopover({ top, left }) {
  return (
    <div
      className={`${style.userPopover} ${(() =>
        top && style.positionPopoverAtBottom)()}`}
      style={(() => (top ? { top, left } : { left }))()}
    >
      <div className={style.status}>
        <img src={statusEmoji} />
        <span>mt?!" “ .I.r '2 f</span>
      </div>
      <div className={style.main}>
        <div>
          <img src={avatar} />
          <div className={style.pro}>PRO</div>
        </div>
        <div className={style.userDetails}>
          <div>
            <a href="#" className={style.userName}>
              Gurmeet Singh
            </a>
            <a href="#" className={style.userID}>
              {' '}
              gurmeetsinghmalhotra
            </a>
          </div>
          <div className={style.userProfile}>
            I am a web developer and designer with love for the web and a zeal
            to create something of value.
          </div>
          <div className={style.location}>
            <LocationSVG />
            <span> Delhi, India</span>
          </div>
        </div>
      </div>
      <div className={style.commit}>
        <CommitSVG />
        <span>Committed to this repository in the past week</span>
      </div>
      <div className={style.sponsor}>
        <a href="#">
          <span>
            <HeartSVG />
            <span>Sponsor</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default UserPopover;
