import React from 'react';
import BurgerNavSVG from 'SVGs/BurgerNavSVG';
import style from './BurgerNav.module.css';

function BurgerNav({ toggleNavBar }) {
  return (
    <button onClick={toggleNavBar} className={style.burgerNav}>
      <BurgerNavSVG />
    </button>
  );
}

export default BurgerNav;
