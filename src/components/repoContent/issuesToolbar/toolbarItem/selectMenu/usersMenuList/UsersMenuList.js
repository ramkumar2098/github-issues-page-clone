import React from 'react';
import Assigned from './assigned/Assigned';
import UsersMenuItem from './usersMenuItem/UsersMenuItem';
import { userMenuItems } from 'data/userMenuItems';
import { v4 as uuidv4 } from 'uuid';
import LastMenuItem from './lastMenuItem/LastMenuItem';

function UsersMenuList(props) {
  const { value } = props;
  const isValid = string =>
    string.toLowerCase().includes(value.trim().toLowerCase());

  return (
    <div style={{ overflow: 'auto' }}>
      <Assigned {...props} />
      {userMenuItems
        .filter(({ userID, userName }) => isValid(userID) || isValid(userName))
        .map(usersMenuItem => (
          <UsersMenuItem key={uuidv4()} usersMenuItem={usersMenuItem} />
        ))}
      {value && <LastMenuItem {...props} />}
    </div>
  );
}

export default UsersMenuList;
