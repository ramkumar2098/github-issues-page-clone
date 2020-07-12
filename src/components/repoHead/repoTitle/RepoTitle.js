import React from 'react';
import RepoSVG from 'SVGs/RepoSVG';
import style from './RepoTitle.module.css';

function RepoTitle() {
  return (
    <div className={style.repoTitle}>
      <RepoSVG />
      <a href="#" className={style.title}>
        facebook
      </a>
      <span className={style.slash}>/</span>
      <a href="#" className={style.subTitle}>
        react
      </a>
    </div>
  );
}

export default RepoTitle;
