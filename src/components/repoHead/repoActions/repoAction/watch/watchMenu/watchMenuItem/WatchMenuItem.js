import React from 'react';
import CheckSVG from 'SVGs/CheckSVG';
import style from './WatchMenuItem.module.css';

function WatchMenuItem({ watchMenuItem }) {
  const { checked, heading, description } = watchMenuItem;

  return (
    <a href="#" className={style.watchMenuItem}>
      {checked && <CheckSVG />}
      <div>
        <div style={(() => (checked ? { color: '#24292e' } : null))()}>
          {heading}
        </div>
        <span>{description}</span>
      </div>
    </a>
  );
}

export default WatchMenuItem;
