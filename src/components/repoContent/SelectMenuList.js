import React from 'react';
import SelectMenuItem from './SelectMenuItem';
import { selectMenuItems } from '../../data/selectMenuItems';
import { v4 as uuidv4 } from 'uuid';
import Assigned from './Assigned';
import LastMenuItem from './LastMenuItem';

function SelectMenuList(props) {
  const { value } = props;
  const isValid = string =>
    string.toLowerCase().includes(value.trim().toLowerCase());

  return (
    <div style={{ overflow: 'auto' }}>
      <Assigned {...props} />
      {selectMenuItems
        .filter(({ userID, userName }) => isValid(userID) || isValid(userName))
        .map(selectMenuItem => (
          <SelectMenuItem key={uuidv4()} selectMenuItem={selectMenuItem} />
        ))}
      {value && <LastMenuItem {...props} />}
    </div>
  );
}

export default SelectMenuList;
