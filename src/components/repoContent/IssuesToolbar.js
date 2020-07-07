import React from 'react';
import ToolbarItem from './ToolbarItem';
import style from './IssuesToolbar.module.css';

function IssuesToolbar() {
  return (
    <div className={style.issuesToolbar}>
      <ToolbarItem textContent="Author" placeholder="users" />
      <ToolbarItem textContent="Label" placeholder="labels" />
    </div>
  );
}

export default IssuesToolbar;
