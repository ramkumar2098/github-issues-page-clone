import React, { useState, useEffect, useRef } from 'react';
import Overlay from 'components/overlay/Overlay';
import DropdownCaret from 'components/dropdownCaret/DropdownCaret';
import WatchMenu from './watchMenu/WatchMenu';
import style from '../RepoAction.module.css';

function Watch({ repoAction }) {
  const { Icon, action } = repoAction;

  const [dislayWatchMenu, setDislayWatchMenu] = useState(false);
  const actionBtnRef = useRef();

  useEffect(() => {
    dislayWatchMenu
      ? (actionBtnRef.current.style.backgroundColor = '#f3f4f6')
      : (actionBtnRef.current.style.backgroundColor = '#fafbfc');
  }, [dislayWatchMenu]);

  return (
    <>
      {dislayWatchMenu && <Overlay />}
      <button
        ref={actionBtnRef}
        onClick={() => setDislayWatchMenu(true)}
        onMouseDown={e => e.preventDefault()}
        className={style.action}
      >
        <Icon />
        <span className={style.textContent}>{action}</span>
        <DropdownCaret color="#000" />
      </button>
      {dislayWatchMenu && (
        <WatchMenu closeWatchMenu={() => setDislayWatchMenu(false)} />
      )}
    </>
  );
}

export default Watch;
