import React, { useRef } from 'react';
import style from './ProjectsMenuTabs.module.css';

function ProjectsMenuTabs() {
  const repoRef = useRef();
  const orgRef = useRef();

  const selectRepo = () => {
    repoRef.current.className = style.tabSelect;
    orgRef.current.className = style.tabUnselect;
  };

  const selectOrg = () => {
    repoRef.current.className = style.tabUnselect;
    orgRef.current.className = style.tabSelect;
  };

  return (
    <div className={style.projectsMenuTabs}>
      <button
        ref={repoRef}
        onClick={selectRepo}
        onMouseDown={e => e.preventDefault()}
        className={style.tabSelect}
      >
        Repository
      </button>
      <button
        ref={orgRef}
        onClick={selectOrg}
        onMouseDown={e => e.preventDefault()}
        className={style.tabUnselect}
      >
        Organization
      </button>
    </div>
  );
}

export default ProjectsMenuTabs;
