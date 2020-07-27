import React, { useState } from 'react';
import Overlay from 'components/overlay/Overlay';
import PlusSVG from 'SVGs/PlusSVG';
import DropdownCaret from 'components/dropdownCaret/DropdownCaret';
import NewMenu from './newMenu/NewMenu';
import style from './New.module.css';

function New() {
  const [displayNewMenu, setDisplayNewMenu] = useState(false);

  return (
    <>
      {displayNewMenu && <Overlay />}
      <div className={style.new}>
        <a
          href="#"
          onClick={() => setDisplayNewMenu(true)}
          className={style.plus}
        >
          <PlusSVG />
          <DropdownCaret />
        </a>
        {displayNewMenu && (
          <NewMenu closeNewMenu={() => setDisplayNewMenu(false)} />
        )}
      </div>
    </>
  );
}

export default New;
