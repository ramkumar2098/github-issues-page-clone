import React from 'react';
import style from '../../selectMenuItem/SelectMenuItem.module.css';

function UsersMenuItem({ usersMenuItem }) {
  const { avatar, userID, userName } = usersMenuItem;

  return (
    <a href="#" className={style.selectMenuItem}>
      <img src={avatar} />
      <strong>{userID}</strong>
      <span>{userName}</span>
    </a>
  );
}

export default UsersMenuItem;
