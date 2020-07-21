import React, { useState, useEffect } from 'react';
import PlusSVG from 'SVGs/PlusSVG';
import DropdownCaret from '../../../dropdownCaret/DropdownCaret';
import NewMenu from './newMenu/NewMenu';
import style from './New.module.css';

function New() {
  const [displayNewMenu, setDisplayNewMenu] = useState(false);

  useEffect(() => {
    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, e => {
        (!e.target.matches('.new, .new *') || e.keyCode === 27) &&
          setDisplayNewMenu(false);
      });
    });
  }, []);

  return (
    <div className={style.new + ' new'}>
      <a
        href="#"
        onClick={() => setDisplayNewMenu(!displayNewMenu)}
        className={style.plus}
      >
        <PlusSVG />
        <DropdownCaret />
      </a>
      {displayNewMenu && <NewMenu />}
    </div>
  );
}

export default New;
