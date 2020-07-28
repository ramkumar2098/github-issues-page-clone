import React, { useState, useEffect } from 'react';
import { contains } from 'utils/contains';
import MilestonesMenuItem from './milestonesMenuItem/MilestonesMenuItem';
import { milestonesMenuItems } from 'data/milestonesMenuItems';
import NotFound from '../notFound/NotFound';

function MilestonesMenuList({ value }) {
  const [notFound, setNotFound] = useState(false);
  let i = 0;

  useEffect(() => {
    i === milestonesMenuItems.length ? setNotFound(true) : setNotFound(false);
  });

  return (
    <div style={{ overflow: 'auto' }}>
      {milestonesMenuItems
        .filter(milestonesMenuItem => {
          !contains(milestonesMenuItem, value) && i++;
          return contains(milestonesMenuItem, value);
        })
        .map(milestonesMenuItem => (
          <MilestonesMenuItem
            key={milestonesMenuItem}
            milestonesMenuItem={milestonesMenuItem}
          />
        ))}
      {notFound && <NotFound menuItem="milestones" />}
    </div>
  );
}

export default MilestonesMenuList;
