import React from 'react';
import style from './RepoInfoButton.module.css';

function RepoInfoButton({
  Icon,
  className,
  repoInfoButton,
  count,
  displayCount,
}) {
  return (
    <a href="#" className={style.infoButton + ' ' + className}>
      <Icon />
      <span style={{ marginLeft: '3px' }}>{repoInfoButton}</span>
      {displayCount && (
        <span title={count} className={style.count}>
          {count}
        </span>
      )}
    </a>
  );
}

export default RepoInfoButton;
