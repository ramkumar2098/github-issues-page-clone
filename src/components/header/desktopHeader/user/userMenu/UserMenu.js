import React from 'react';
import { useAttachEvents } from 'hooks/useAttachEvents';
import SignedIn from './signedIn/SignedIn';
import Divider from '../../divider/Divider';
import SetStatus from './setStatus/SetStatus';
import MenuItem from '../../menuItem/MenuItem';
import { userDropDownItems, userDropDownItems2 } from 'data/userDropdownItems';
import style from '../../menu/Menu.module.css';

function UserMenu({ closeUserMenu }) {
  useAttachEvents('userMenu', closeUserMenu);

  return (
    <ul className={style.menu + ' userMenu'} style={{ width: '180px' }}>
      <SignedIn />
      <Divider />
      <SetStatus />
      <Divider />
      {userDropDownItems.map(userDropDownItem => (
        <MenuItem key={userDropDownItem} menuItem={userDropDownItem} />
      ))}
      <Divider />
      {userDropDownItems2.map(userDropDownItem => (
        <MenuItem key={userDropDownItem} menuItem={userDropDownItem} />
      ))}
    </ul>
  );
}

export default UserMenu;
