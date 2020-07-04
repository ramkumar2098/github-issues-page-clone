import React from 'react';
import style from './RepoAction.module.css';

function RepoAction({ repoAction }) {
  const { Icon, textContent, count } = repoAction;

  return (
    <div className={style.repoAction}>
      <button className={style.action}>
        <Icon />
        <span className={style.textContent}>{textContent}</span>
      </button>
      <a href="#" className={style.link}>
        {count}
      </a>
    </div>
  );
}

export default RepoAction;
