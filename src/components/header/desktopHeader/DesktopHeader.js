import React from 'react';
import GithubLogo from '../githubLogo/GithubLogo';
import SearchField from '../../searchField/SearchField';
import HeaderNavItems from './headerNavItems/HeaderNavItems';
import NotificationBell from '../notificationBell/NotificationBell';
import New from './new/New';
import User from './user/User';

const desktopHead = {
  display: 'flex',
  alignItems: 'center',
};

const searchFieldStyles = {
  display: 'inline',
  width: '300px',
  marginBottom: 0,
};

function DesktopHeader() {
  return (
    <div style={{ padding: '8px 16px' }}>
      <span style={desktopHead}>
        <GithubLogo />
        <SearchField styles={searchFieldStyles} />
        <HeaderNavItems />
      </span>
      <span style={desktopHead}>
        <NotificationBell marginRight="16px" />
        <New />
        <User />
      </span>
    </div>
  );
}

export default DesktopHeader;
