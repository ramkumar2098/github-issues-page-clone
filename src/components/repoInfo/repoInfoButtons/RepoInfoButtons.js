import React from 'react';
import RepoInfoButton from './repoInfoButton/RepoInfoButton';
import LabelsSVG from 'SVGs/LabelsSVG';
import MilestonesSVG from 'SVGs/MilestonesSVG';
import style from './RepoInfoButtons.module.css';

function RepoInfoButtons({ displayCount }) {
  return (
    <div style={{ display: 'flex' }}>
      <RepoInfoButton
        className={style.labels}
        Icon={LabelsSVG}
        repoInfoButton="Labels"
        count="56"
        displayCount={displayCount}
      />
      <RepoInfoButton
        className={style.milestones}
        Icon={MilestonesSVG}
        repoInfoButton="Milestones"
        count="1"
        displayCount={displayCount}
      />
    </div>
  );
}

export default RepoInfoButtons;
