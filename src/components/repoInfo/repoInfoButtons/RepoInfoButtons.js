import React from 'react';
import RepoInfoButton from './repoInfoButton/RepoInfoButton';
import { repoInfoButtons } from 'data/repoInfoButtons';

function RepoInfoButtons({ displayCount }) {
  return (
    <div style={{ display: 'flex' }}>
      {repoInfoButtons.map(repoInfoButton => (
        <RepoInfoButton
          key={repoInfoButton.infoButtonName}
          repoInfoButton={repoInfoButton}
          displayCount={displayCount}
        />
      ))}
    </div>
  );
}

export default RepoInfoButtons;
