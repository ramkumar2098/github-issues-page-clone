import React from 'react';
import style from './LastMenuItem.module.css';

function LastMenuItem({ textContent, value }) {
  return (
    <a href="#" className={style.lastMenuItem}>
      <div>
        {textContent.toLowerCase()}:{value}
      </div>
      <div>Filter by this user</div>
    </a>
  );
}

export default LastMenuItem;
