import React from 'react';
import ProjectsMenuTabs from './projectsMenuTabs/ProjectsMenuTabs';
import NotFound from '../notFound/NotFound';

function ProjectsMenuList() {
  return (
    <>
      <ProjectsMenuTabs />
      <NotFound menuItem="projects" />
    </>
  );
}

export default ProjectsMenuList;
