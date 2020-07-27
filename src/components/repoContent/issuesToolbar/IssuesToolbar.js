import React from 'react';
import ToolbarItem from './toolbarItem/ToolbarItem';
import { toolbarItems } from 'data/toolbarItems';
import UsersMenuList from './toolbarItem/selectMenu/usersMenuList/UsersMenuList';
import LabelMenuList from './toolbarItem/selectMenu/labelMenuList/LabelMenuList';
import ProjectsMenuList from './toolbarItem/selectMenu/projectsMenuList/ProjectsMenuList';
import MilestonesMenuList from './toolbarItem/selectMenu/milestonesMenuList/MilestonesMenuList';
import SortMenuList from './toolbarItem/selectMenu/sortMenuList/SortMenuList';
import style from './IssuesToolbar.module.css';

const selectMenuList = [
  UsersMenuList,
  LabelMenuList,
  ProjectsMenuList,
  MilestonesMenuList,
  UsersMenuList,
  SortMenuList,
];

function IssuesToolbar() {
  return (
    <div className={style.issuesToolbar}>
      {toolbarItems.map((toolbarItem, i) => (
        <ToolbarItem
          key={toolbarItem.toolbarItemName}
          toolbarItem={toolbarItem}
          SelectMenuList={selectMenuList[i]}
        />
      ))}
    </div>
  );
}

export default IssuesToolbar;
