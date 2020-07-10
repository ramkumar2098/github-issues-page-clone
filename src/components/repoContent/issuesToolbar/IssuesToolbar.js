import React from 'react';
import ToolbarItem from './toolbarItem/ToolbarItem';
import { toolbarItems } from '../../../data/toolbarItems';
import { v4 as uuidv4 } from 'uuid';
import style from './IssuesToolbar.module.css';

function IssuesToolbar() {
  return (
    <div className={style.issuesToolbar}>
      {toolbarItems.map(toolbarItem => (
        <ToolbarItem key={uuidv4()} toolbarItem={toolbarItem} />
      ))}
    </div>
  );
}

export default IssuesToolbar;
