import React from 'react';
import SelectMenuItem from './SelectMenuItem';
import { selectMenuItems } from '../../data/selectMenuItems';
import { v4 as uuidv4 } from 'uuid';

function SelectMenuList({ value }) {
  const isValid = string => string.toLowerCase().includes(value.toLowerCase());

  return (
    <div style={{ overflow: 'auto' }}>
      {selectMenuItems
        .filter(({ userID, userName }) => isValid(userID) || isValid(userName))
        .map(selectMenuItem => (
          <SelectMenuItem key={uuidv4()} selectMenuItem={selectMenuItem} />
        ))}
    </div>
  );
}

export default SelectMenuList;
