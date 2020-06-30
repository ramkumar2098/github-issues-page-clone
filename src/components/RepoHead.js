import React, { useState, useEffect } from 'react';
import RepoTitle from './RepoTitle';
import RepoActions from './RepoActions';
import RepoNav from './RepoNav';
import RepoNavMenuButton from './RepoNavMenuButton';
import RepoNavMenu from './RepoNavMenu';
import style from './RepoHead.module.css';

function RepoHead() {
  const [displayRepoNavMenu, setDisplayRepoNavMenu] = useState(false);

  useEffect(() => {
    ['keyup', 'click'].forEach(event =>
      window.addEventListener(event, e => {
        event === 'keyup' &&
          displayRepoNavMenu &&
          e.keyCode === 27 &&
          setDisplayRepoNavMenu(false);

        event === 'click' &&
          displayRepoNavMenu &&
          e.target.nodeName !== 'UL' &&
          e.target.nodeName !== 'A' &&
          e.target.nodeName !== 'svg' &&
          e.target.nodeName !== 'path' &&
          setDisplayRepoNavMenu(false);
      })
    );
  }, [displayRepoNavMenu]);

  return (
    <div className={style.repoHead}>
      <div style={{ marginBottom: '16px' }}>
        <RepoTitle />
        <RepoActions />
      </div>
      <div>
        <RepoNav />
        <RepoNavMenuButton
          toggleRepoNavMenu={() => setDisplayRepoNavMenu(!displayRepoNavMenu)}
        />
      </div>
      {displayRepoNavMenu && <RepoNavMenu />}
    </div>
  );
}

export default RepoHead;
