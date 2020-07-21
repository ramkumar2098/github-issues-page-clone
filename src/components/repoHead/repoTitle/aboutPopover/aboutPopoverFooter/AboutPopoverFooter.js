import React from 'react';
import RepoSVG from 'SVGs/RepoSVG';
import MembersSVG from 'SVGs/MembersSVG';
import style from './AboutPopoverFooter.module.css';

function AboutPopoverFooter({ about }) {
  const { repositories, members } = about;

  return (
    <div className={style.aboutPopoverFooter}>
      <RepoSVG />
      <span>{repositories} repositories</span>
      <MembersSVG />
      <span>{members} members</span>
    </div>
  );
}

export default AboutPopoverFooter;
