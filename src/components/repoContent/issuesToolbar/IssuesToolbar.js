import React from 'react';
import ToolbarItem from './toolbarItem/ToolbarItem';
import { toolbarItems } from 'data/toolbarItems';
import style from './IssuesToolbar.module.css';

function IssuesToolbar() {
  return (
    <div className={style.issuesToolbar}>
      {toolbarItems.map(toolbarItem => (
        <ToolbarItem key={toolbarItem.textContent} toolbarItem={toolbarItem} />
      ))}
    </div>
  );
}

export default IssuesToolbar;
