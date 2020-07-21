import React, { useState, useEffect } from 'react';
import Avatar from '../../avatar/Avatar';
import DropdownCaret from '../../../dropdownCaret/DropdownCaret';
import UserMenu from './userMenu/UserMenu';
import style from './User.module.css';

function User() {
  const [displayUserMenu, setDisplayUserMenu] = useState(false);

  useEffect(() => {
    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, e => {
        (!e.target.matches('.user, .user *') || e.keyCode === 27) &&
          setDisplayUserMenu(false);
      });
    });
  }, []);

  return (
    <div className={style.user + ' user'}>
      <a
        href="#"
        onClick={() => setDisplayUserMenu(!displayUserMenu)}
        className={style.avatar}
      >
        <Avatar />
        <DropdownCaret />
      </a>
      {displayUserMenu && <UserMenu />}
    </div>
  );
}

export default User;
