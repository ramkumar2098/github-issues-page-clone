import React from 'react';
import SmileySVG from 'SVGs/SmileySVG';
import style from './SetStatus.module.css';

function SetStatus() {
  return (
    <div className={style.setStatus}>
      <a href="#">
        <SmileySVG />
        <span>Set status</span>
      </a>
    </div>
  );
}

export default SetStatus;
