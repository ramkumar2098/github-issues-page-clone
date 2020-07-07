import React, { useState } from 'react';
import SelectMenuHeader from './SelectMenuHeader';
import SelectMenuFilter from './SelectMenuFilter';
import SelectMenuList from './SelectMenuList';
import style from './SelectMenu.module.css';

function SelectMenu(props) {
  const [value, setValue] = useState('');

  return (
    <div className={style.selectMenu}>
      <div className={style.selectMenuModal + ' selectMenuModal'}>
        <SelectMenuHeader {...props} />
        <SelectMenuFilter {...props} value={value} setValue={setValue} />
        <SelectMenuList value={value} />
      </div>
    </div>
  );
}

export default SelectMenu;
