import React from 'react';
import style from './RepoInfoButton.module.css';

function RepoInfoButton({ Icon, className, textContent, count, displayCount }) {
  return (
    <a href="#" className={style.infoButton + ' ' + className}>
      <Icon />
      <span style={{ marginLeft: '3px' }}>{textContent}</span>
      {displayCount && <span className={style.count}>{count}</span>}
    </a>
  );
}

export default RepoInfoButton;
