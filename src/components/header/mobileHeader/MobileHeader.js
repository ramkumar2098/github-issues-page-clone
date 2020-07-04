import React from 'react';
import BurgerNav from './burgerNav/BurgerNav';
import GithubLogo from '../githubLogo/GithubLogo';
import NotificationBell from '../notificationBell/NotificationBell';

function MobileHeader() {
  return (
    <div>
      <BurgerNav />
      <GithubLogo />
      <NotificationBell />
    </div>
  );
}

export default MobileHeader;
