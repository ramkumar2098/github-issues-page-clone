import React, { useState } from 'react';
import SelectMenuHeader from './SelectMenuHeader';
import SelectMenuFilter from './SelectMenuFilter';
import ProjectsMenuTabs from './ProjectsMenuTabs';
import NotFound from './NotFound';
import style from './SelectMenu.module.css';

function ProjectsMenu(props) {
  const [value, setValue] = useState('');

  return (
    <div className={style.selectMenu}>
      <div className={style.selectMenuModal + ' ' + props.className}>
        <SelectMenuHeader {...props} />
        <SelectMenuFilter {...props} value={value} setValue={setValue} />
        <ProjectsMenuTabs />
        <NotFound textContent="projects" />
      </div>
    </div>
  );
}

export default ProjectsMenu;
