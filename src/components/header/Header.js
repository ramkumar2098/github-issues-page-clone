import React from 'react';
import DesktopHeader from './desktopHeader/DesktopHeader';
import MobileHeader from './mobileHeader/MobileHeader';
import style from './Header.module.css';

function Header({ desktopView }) {
  return (
    <div className={style.header}>
      {desktopView ? <DesktopHeader /> : <MobileHeader />}
    </div>
  );
}

export default Header;
