import React from 'react';
import Avatar from '../../Avatar';
import Dropdown from '../dropdown/Dropdown';
import style from './User.module.css';

function User() {
  return (
    <a href="#" className={style.user}>
      <Avatar />
      <Dropdown />
    </a>
  );
}

export default User;
