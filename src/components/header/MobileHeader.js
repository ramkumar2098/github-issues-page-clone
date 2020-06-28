import React from 'react';
import BurgerNav from '../burgerNav/BurgerNav';
import GithubLogo from '../GithubLogo';
import NotificationBell from './NotificationBell';

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
