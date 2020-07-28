import React from 'react';
import { contains } from 'utils/contains';
import Assigned from './assigned/Assigned';
import UsersMenuItem from './usersMenuItem/UsersMenuItem';
import { userMenuItems } from 'data/userMenuItems';
import LastMenuItem from './lastMenuItem/LastMenuItem';

function UsersMenuList(props) {
  const { value } = props;

  return (
    <div style={{ overflow: 'auto' }}>
      <Assigned {...props} />
      {userMenuItems
        .filter(
          ({ userID, userName }) =>
            contains(userID, value) || contains(userName, value)
        )
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
