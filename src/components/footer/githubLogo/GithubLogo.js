import React from 'react';
import GithubLogoSVG from 'SVGs/GithubLogoSVG';
import style from './GithubLogo.module.css';

function GithubLogo() {
  return (
    <a href="#" className={style.githubLogo}>
      <GithubLogoSVG />
    </a>
  );
}

export default GithubLogo;
