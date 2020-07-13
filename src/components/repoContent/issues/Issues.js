import React from 'react';
import Issue from './Issue';
import style from './Issues.module.css';

function Issues() {
  return (
    <div className={style.issues}>
      <Issue />
    </div>
  );
}

export default Issues;
