import React from 'react';
import Watch from './watch/Watch';
import style from './RepoAction.module.css';

function RepoAction(props) {
  const { Icon, action, count } = props.repoAction;

  return (
    <div className={style.repoAction}>
      {action === 'Watch' ? (
        <Watch {...props} />
      ) : (
        <button className={style.action}>
          <Icon />
          <span className={style.textContent}>{action}</span>
        </button>
      )}
      <a href="#" className={style.link}>
        {count}
      </a>
    </div>
  );
}

export default RepoAction;
