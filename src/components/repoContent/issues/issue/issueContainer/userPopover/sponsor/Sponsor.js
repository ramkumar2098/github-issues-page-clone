import React from 'react';
import HeartSVG from 'SVGs/HeartSVG';
import style from './Sponsor.module.css';

function Sponsor() {
  return (
    <div className={style.sponsor}>
      <a href="#">
        <span>
          <HeartSVG />
          <span>Sponsor</span>
        </span>
      </a>
    </div>
  );
}

export default Sponsor;
