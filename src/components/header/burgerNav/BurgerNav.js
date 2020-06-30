import React, { useContext } from 'react';
import BurgerNavSVG from '../../../SVGs/BurgerNavSVG';
import { DisplayNavBarContext } from '../../Container';
import style from './BurgerNav.module.css';

function BurgerNav() {
  const { displayNavBar, setDisplayNavBar } = useContext(DisplayNavBarContext);

  const handleClick = () => {
    setDisplayNavBar(!displayNavBar);
  };

  return (
    <button onClick={handleClick} className={style.burgerNav}>
      <BurgerNavSVG />
    </button>
  );
}

export default BurgerNav;
