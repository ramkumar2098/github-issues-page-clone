import React from 'react';
import ToolbarItem from './ToolbarItem';
import SelectMenu from './SelectMenu';
import LabelMenu from './LabelMenu';
import ProjectsMenu from './ProjectsMenu';
import MilestonesMenu from './MilestonesMenu';
import SortMenu from './SortMenu';
import style from './IssuesToolbar.module.css';

function IssuesToolbar() {
  return (
    <div className={style.issuesToolbar}>
      <ToolbarItem
        textContent="Author"
        classNames={['author', 'authorMenuModal']}
        header="Filter by author"
        placeholder="users"
        SelectMenu={SelectMenu}
      />
      <ToolbarItem
        textContent="Label"
        classNames={['label', 'labelMenuModal']}
        header="Filter by label"
        placeholder="labels"
        SelectMenu={LabelMenu}
      />
      <ToolbarItem
        textContent="Projects"
        classNames={['projects', 'projectsMenuModal']}
        header="Filter by project"
        placeholder="projects"
        SelectMenu={ProjectsMenu}
      />
      <ToolbarItem
        textContent="Milestones"
        classNames={['milestones', 'milestonesMenuModal']}
        header="Filter by milestone"
        placeholder="milestones"
        SelectMenu={MilestonesMenu}
      />
      <ToolbarItem
        textContent="Assignee"
        classNames={['assignee', 'assigneeMenuModal']}
        header="Filter by who’s assigned"
        placeholder="users"
        SelectMenu={SelectMenu}
      />
      <ToolbarItem
        textContent="Sort"
        classNames={['sort', 'sortMenuModal']}
        header="Sort by"
        SelectMenu={SortMenu}
      />
    </div>
  );
}

export default IssuesToolbar;
