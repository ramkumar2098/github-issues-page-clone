import React from 'react';
import style from './RepoInfoButton.module.css';

function RepoInfoButton({ repoInfoButton, displayCount }) {
  const { Icon, infoButtonName, count } = repoInfoButton;

  return (
    <a
      href="#"
      className={`${style.infoButton} ${(() =>
        infoButtonName === 'Labels' ? style.labels : style.milestones)()}`}
    >
      <Icon />
      <span style={{ marginLeft: '3px' }}>{infoButtonName}</span>
      {displayCount && (
        <span title={count} className={style.count}>
          {count}
        </span>
      )}
    </a>
  );
}

export default RepoInfoButton;
