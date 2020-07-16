import React from 'react';
import CommitSVG from 'SVGs/CommitSVG';
import style from './Commit.module.css';

function Commit() {
  return (
    <div className={style.commit}>
      <CommitSVG />
      <span>Committed to this repository in the past week</span>
    </div>
  );
}

export default Commit;
