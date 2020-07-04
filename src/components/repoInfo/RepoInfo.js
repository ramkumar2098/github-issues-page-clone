import React, { useState } from 'react';
import RepoInfoButtons from './repoInfoButtons/RepoInfoButtons';
import NewIssue from './newIssue/NewIssue';
import Filters from './filters/Filters';
import style from './RepoInfo.module.css';

function RepoInfo() {
  const mediaQ = window.matchMedia('(min-width: 770px)');
  const [displayCount, setDisplayCount] = useState(mediaQ.matches);
  mediaQ.onchange = () => setDisplayCount(mediaQ.matches);

  return (
    <div className={style.repoInfo}>
      <div>
        <RepoInfoButtons displayCount={displayCount} />
        <NewIssue displayCount={displayCount} />
      </div>
      <Filters />
    </div>
  );
}

export default RepoInfo;
