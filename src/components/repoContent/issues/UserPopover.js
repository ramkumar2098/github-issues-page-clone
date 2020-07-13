import React from 'react';
import avatar from 'images/avatar.png';
import style from './UserPopover.module.css';
import LocationSVG from 'SVGs/LocationSVG';

function UserPopover({ top }) {
  return (
    <div
      className={
        style.userPopover + ' ' + (() => top && style.positionPopoverAtBottom)()
      }
      style={(() => (top ? { top: top + 'px' } : null))()}
    >
      <img src={avatar} />
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
          I am a web developer and designer with love for the web and a zeal to
          create something of value.
        </div>
        <div className={style.location}>
          <LocationSVG />
          <span> Delhi, India</span>
        </div>
      </div>
    </div>
  );
}

export default UserPopover;
