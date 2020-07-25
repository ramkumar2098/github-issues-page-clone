import React, { useState, useEffect, useRef } from 'react';
import RepoTitle from './repoTitle/RepoTitle';
import RepoActions from './repoActions/RepoActions';
import RepoNav from './repoNav/RepoNav';
import RepoNavMenuButton from './repoNavMenuButton/RepoNavMenuButton';
import RepoNavMenu from './repoNavMenu/RepoNavMenu';
import style from './RepoHead.module.css';

function RepoHead() {
  const [displayRepoNavMenu, setDisplayRepoNavMenu] = useState(false);

  const mediaQ = window.matchMedia('(min-width: 544px)');
  const [displayIcon, setDisplayIcon] = useState(mediaQ.matches);
  mediaQ.onchange = () => setDisplayIcon(mediaQ.matches);

  useEffect(() => {
    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, e => {
        (!e.target.matches(
          '.menuButton, .menuButton *, .repoNavMenu, .repoNavMenu *'
        ) ||
          e.keyCode === 27) &&
          setDisplayRepoNavMenu(false);
      });
    });
  }, []);

  const navButtonRef = useRef();

  return (
    <div className={style.repoHead}>
      <div style={{ marginBottom: '16px' }}>
        <RepoTitle />
        <RepoActions />
      </div>
      <div>
        <RepoNav navButtonRef={navButtonRef} displayIcon={displayIcon} />
        <RepoNavMenuButton
          navButtonRef={navButtonRef}
          displayRepoNavMenu={displayRepoNavMenu}
          toggleRepoNavMenu={() => setDisplayRepoNavMenu(!displayRepoNavMenu)}
        />
      </div>
      {displayRepoNavMenu && <RepoNavMenu displayIcon={displayIcon} />}
    </div>
  );
}

export default RepoHead;
