import React, { useState } from 'react';
import { useAttachEvents } from 'hooks/useAttachEvents';
import SelectMenuHeader from './selectMenuHeader/SelectMenuHeader';
import SelectMenuFilter from './selectMenuFilter/SelectMenuFilter';
import style from './SelectMenu.module.css';

function SelectMenu(props) {
  const { toolbarItem, SelectMenuList, closeMenu } = props;
  const { toolbarItemName } = toolbarItem;

  const [value, setValue] = useState('');

  useAttachEvents('selectMenuModal', closeMenu);

  return (
    <div className={style.selectMenu}>
      <div className={style.selectMenuModal + ' selectMenuModal'}>
        <SelectMenuHeader {...props} />
        {toolbarItemName !== 'Sort' && (
          <SelectMenuFilter {...props} value={value} setValue={setValue} />
        )}
        <SelectMenuList {...props} value={value} />
      </div>
    </div>
  );
}

export default SelectMenu;
