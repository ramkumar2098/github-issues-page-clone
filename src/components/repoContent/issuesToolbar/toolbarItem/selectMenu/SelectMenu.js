import React, { useState } from 'react';
import SelectMenuHeader from './selectMenuHeader/SelectMenuHeader';
import SelectMenuFilter from './selectMenuFilter/SelectMenuFilter';
import style from './SelectMenu.module.css';

function SelectMenu(props) {
  const { className, toolbarItem, SelectMenuList } = props;
  const [value, setValue] = useState('');

  return (
    <div className={style.selectMenu}>
      <div className={style.selectMenuModal + ' ' + className}>
        <SelectMenuHeader {...props} />
        {toolbarItem !== 'Sort' && (
          <SelectMenuFilter {...props} value={value} setValue={setValue} />
        )}
        <SelectMenuList toolbarItem={toolbarItem} value={value} />
      </div>
    </div>
  );
}

export default SelectMenu;
