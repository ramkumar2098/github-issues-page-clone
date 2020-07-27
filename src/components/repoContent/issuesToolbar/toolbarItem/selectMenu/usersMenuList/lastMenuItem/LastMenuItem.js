import React from 'react';
import style from './LastMenuItem.module.css';

function LastMenuItem({ toolbarItem, value }) {
  const { toolbarItemName } = toolbarItem;

  return (
    <a href="#" className={style.lastMenuItem}>
      <div>
        {toolbarItemName.toLowerCase()}:{value}
      </div>
      <div>Filter by this user</div>
    </a>
  );
}

export default LastMenuItem;
