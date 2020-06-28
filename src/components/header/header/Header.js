import React from 'react';
import DesktopHeader from '../DesktopHeader';
import MobileHeader from '../MobileHeader';
import style from './Header.module.css';

function Header({ desktopView }) {
  return (
    <div className={style.header}>
      {desktopView ? <DesktopHeader /> : <MobileHeader />}
    </div>
  );
}

export default Header;
