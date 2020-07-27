import React, { useState } from 'react';
import Overlay from 'components/overlay/Overlay';
import Avatar from '../../avatar/Avatar';
import DropdownCaret from 'components/dropdownCaret/DropdownCaret';
import UserMenu from './userMenu/UserMenu';
import style from './User.module.css';

function User() {
  const [displayUserMenu, setDisplayUserMenu] = useState(false);

  return (
    <>
      {displayUserMenu && <Overlay />}
      <div className={style.user}>
        <a
          href="#"
          onClick={() => setDisplayUserMenu(true)}
          className={style.avatar}
        >
          <Avatar />
          <DropdownCaret />
        </a>
        {displayUserMenu && (
          <UserMenu closeUserMenu={() => setDisplayUserMenu(false)} />
        )}
      </div>
    </>
  );
}

export default User;
