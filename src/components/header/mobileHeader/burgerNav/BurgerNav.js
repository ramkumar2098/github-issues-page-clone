import React, { useContext } from 'react';
import BurgerNavSVG from '../../../../SVGs/BurgerNavSVG';
import { DisplayNavBarContext } from '../../../Container';
import style from './BurgerNav.module.css';

function BurgerNav() {
  const toggleNavBar = useContext(DisplayNavBarContext);

  return (
    <button onClick={toggleNavBar} className={style.burgerNav}>
      <BurgerNavSVG />
    </button>
  );
}

export default BurgerNav;
