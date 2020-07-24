import React from 'react';
import GithubLogoSVG from 'SVGs/GithubLogoSVG';
import style from './GithubLogo.module.css';

function GithubLogo({ title }) {
  return (
    <a href="#" title={title} className={style.githubLogo}>
      <GithubLogoSVG />
    </a>
  );
}

export default GithubLogo;
