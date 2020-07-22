import React, { useState } from 'react';
import DesktopHeader from './desktopHeader/DesktopHeader';
import MobileHeader from './mobileHeader/MobileHeader';
import BurgerMenu from './burgerMenu/BurgerMenu';
import style from './Header.module.css';

function Header() {
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const mediaQ = window.matchMedia('(min-width: 1012px)');
  const [desktopView, setDesktopView] = useState(mediaQ.matches);
  mediaQ.onchange = () => setDesktopView(mediaQ.matches);

  return (
    <>
      <div className={style.header}>
        {desktopView ? (
          <DesktopHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        ) : (
          <MobileHeader
            toggleNavBar={() => setDisplayBurgerMenu(!displayBurgerMenu)}
          />
        )}
      </div>
      {!desktopView && displayBurgerMenu && (
        <BurgerMenu searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      )}
    </>
  );
}

export default Header;
