import React from 'react';
import Assigned from './assigned/Assigned';
import UsersMenuItem from './usersMenuItem/UsersMenuItem';
import { userMenuItems } from 'data/userMenuItems';
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
          <UsersMenuItem
            key={usersMenuItem.userID}
            usersMenuItem={usersMenuItem}
          />
        ))}
      {value && <LastMenuItem {...props} />}
    </div>
  );
}

export default UsersMenuList;
