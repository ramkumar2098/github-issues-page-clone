import React from 'react';
import Avatar from '../../avatar/Avatar';
import DropdownCaret from '../../../dropdownCaret/DropdownCaret';
import style from './User.module.css';

function User() {
  return (
    <a href="#" className={style.user}>
      <Avatar />
      <DropdownCaret />
    </a>
  );
}

export default User;
