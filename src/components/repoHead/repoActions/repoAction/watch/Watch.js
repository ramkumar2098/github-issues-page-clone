import React, { useState, useEffect, useRef } from 'react';
import Overlay from 'components/overlay/Overlay';
import DropdownCaret from '../../../../dropdownCaret/DropdownCaret';
import WatchMenu from './watchMenu/WatchMenu';
import style from '../RepoAction.module.css';

function Watch({ repoAction }) {
  const { Icon, action } = repoAction;

  const [dislayWatchMenu, setDislayWatchMenu] = useState(false);

  useEffect(() => {
    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, e => {
        event === 'click'
          ? !e.target.matches('.action, .action *, .watchMenu, .watchMenu *') &&
            setDislayWatchMenu(false)
          : e.keyCode === 27 && setDislayWatchMenu(false);
      });
    });
  }, []);

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
        onClick={() => setDislayWatchMenu(!dislayWatchMenu)}
        onMouseDown={e => e.preventDefault()}
        className={style.action + ' action'}
      >
        <Icon />
        <span className={style.textContent}>{action}</span>
        <DropdownCaret color="#000" />
      </button>
      {dislayWatchMenu && <WatchMenu />}
    </>
  );
}

export default Watch;
