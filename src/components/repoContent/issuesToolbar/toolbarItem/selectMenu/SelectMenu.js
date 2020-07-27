import React, { useState, useEffect } from 'react';
import SelectMenuHeader from './selectMenuHeader/SelectMenuHeader';
import SelectMenuFilter from './selectMenuFilter/SelectMenuFilter';
import style from './SelectMenu.module.css';

function SelectMenu(props) {
  const { toolbarItem, SelectMenuList, closeMenu } = props;
  const { toolbarItemName } = toolbarItem;

  const [value, setValue] = useState('');

  useEffect(() => {
    const handleEvent = e =>
      (e.keyCode === 27 ||
        (!e.keyCode &&
          !e.target.matches('.selectMenuModal, .selectMenuModal *'))) &&
      closeMenu();

    ['click', 'keyup'].forEach(event => {
      window.addEventListener(event, handleEvent);
    });

    return () =>
      ['click', 'keyup'].forEach(event => {
        window.removeEventListener(event, handleEvent);
      });
  }, []);

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
