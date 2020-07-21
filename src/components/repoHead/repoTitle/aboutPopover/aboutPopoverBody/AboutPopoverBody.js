import React from 'react';
import LocationSVG from 'SVGs/LocationSVG';
import style from './AboutPopoverBody.module.css';

function AboutPopoverBody({ about }) {
  const { avatar, userName, userID, userProfile, location } = about;

  return (
    <div className={style.aboutPopoverBody}>
      <div>
        <a href="#">
          <img src={avatar} className={style.avatar} />
        </a>
      </div>
      <div className={style.userDetails}>
        <div>
          <div>
            <a href="#" className={style.userName}>
              {userName}
            </a>
            <a href="#" className={style.userID}>
              {userID}
            </a>
          </div>
          <div className={style.verified}>Verified</div>
        </div>
        <div className={style.userProfile}>{userProfile}</div>
        <div className={style.location}>
          <LocationSVG />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

export default AboutPopoverBody;
