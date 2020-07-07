import React from 'react';
import style from './SelectMenuItem.module.css';

function SelectMenuItem({ selectMenuItem }) {
  const { avatar, userID, userName } = selectMenuItem;

  return (
    <a href="#" className={style.selectMenuItem}>
      <img src={avatar} />
      <strong>{userID}</strong>
      <span>{userName}</span>
    </a>
  );
}

export default SelectMenuItem;
