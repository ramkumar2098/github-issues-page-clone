import React, { useState } from 'react';
import SelectMenuHeader from './SelectMenuHeader';
import SelectMenuFilter from './SelectMenuFilter';
import MilestonesMenuList from './MilestonesList';
import style from './SelectMenu.module.css';

function MilestonesMenu(props) {
  const [value, setValue] = useState('');

  return (
    <div className={style.selectMenu}>
      <div className={style.selectMenuModal + ' ' + props.className}>
        <SelectMenuHeader {...props} />
        <SelectMenuFilter {...props} value={value} setValue={setValue} />
        <MilestonesMenuList value={value} />
      </div>
    </div>
  );
}

export default MilestonesMenu;
