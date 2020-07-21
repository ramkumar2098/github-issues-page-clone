import React from 'react';
import LocationSVG from 'SVGs/LocationSVG';
import style from './UserPopoverBody.module.css';

function UserPopoverBody(props) {
  const {
    avatar,
    isPro,
    userName,
    userID,
    userProfile,
    location,
  } = props.issue;

  return (
    <div className={style.userPopoverBody}>
      <div>
        <a href="#">
          <img src={avatar} />
        </a>
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
        {userProfile && <div className={style.userProfile}>{userProfile}</div>}
        {location && (
          <div className={style.location}>
            <LocationSVG />
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPopoverBody;
