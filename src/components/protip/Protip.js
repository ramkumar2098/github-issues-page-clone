import React from 'react';
import LightBulbSVG from 'SVGs/LightBulbSVG';
import style from './Protip.module.css';

function Protip() {
  return (
    <div className={style.protip}>
      <LightBulbSVG />
      <strong>ProTip!</strong> Updated in the last three days:{' '}
      <a href="#">updated:{'>'}2020-07-15.</a>
    </div>
  );
}

export default Protip;
