import React from 'react';
import SelectMenuHeader from './SelectMenuHeader';
import SortMenuList from './SortMenuList';
import style from './SelectMenu.module.css';

function SortMenu(props) {
  return (
    <div className={style.selectMenu}>
      <div className={style.selectMenuModal + ' ' + props.className}>
        <SelectMenuHeader {...props} />
        <SortMenuList />
      </div>
    </div>
  );
}

export default SortMenu;
