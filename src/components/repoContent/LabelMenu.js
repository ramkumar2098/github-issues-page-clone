import React, { useState } from 'react';
import SelectMenuHeader from './SelectMenuHeader';
import SelectMenuFilter from './SelectMenuFilter';
import LabelMenuList from './LabelMenuList';
import LabelMenuFooter from './LabelMenuFooter';
import style from './SelectMenu.module.css';

function LabelMenu(props) {
  const [value, setValue] = useState('');

  return (
    <div className={style.selectMenu}>
      <div className={style.selectMenuModal + ' ' + props.className}>
        <SelectMenuHeader {...props} />
        <SelectMenuFilter {...props} value={value} setValue={setValue} />
        <LabelMenuList value={value} />
        <LabelMenuFooter />
      </div>
    </div>
  );
}

export default LabelMenu;
