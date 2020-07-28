import React from 'react';
import GithubLogo from '../githubLogo/GithubLogo';
import SearchField from '../searchField/SearchField';
import HeaderNavItems from './headerNavItems/HeaderNavItems';
import NotificationBell from '../notificationBell/NotificationBell';
import New from './new/New';
import User from './user/User';
import style from './DesktopHeader.module.css';

const searchFieldStyles = {
  display: 'inline',
  width: '300px',
  marginBottom: 0,
};

function DesktopHeader(props) {
  return (
    <div className={style.desktopHeader}>
      <span>
        <GithubLogo />
        <SearchField {...props} styles={searchFieldStyles} />
        <HeaderNavItems />
      </span>
      <span>
        <NotificationBell marginRight="16px" />
        <New />
        <User />
      </span>
    </div>
  );
}

export default DesktopHeader;
