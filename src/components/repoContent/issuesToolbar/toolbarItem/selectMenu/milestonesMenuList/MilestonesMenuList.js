import React, { useState, useEffect } from 'react';
import MilestonesMenuItem from './milestonesMenuItem/MilestonesMenuItem';
import { milestonesMenuItems } from 'data/milestonesMenuItems';
import NotFound from '../notFound/NotFound';

function MilestonesMenuList({ value }) {
  const [notFound, setNotFound] = useState(false);
  let i = 0;

  useEffect(() => {
    i === milestonesMenuItems.length ? setNotFound(true) : setNotFound(false);
  });

  const isValid = string =>
    string.toLowerCase().includes(value.trim().toLowerCase());

  return (
    <div style={{ overflow: 'auto' }}>
      {milestonesMenuItems
        .filter(milestonesMenuItem => {
          !isValid(milestonesMenuItem) && i++;
          return isValid(milestonesMenuItem);
        })
        .map(milestonesMenuItem => (
          <MilestonesMenuItem
            key={milestonesMenuItem}
            milestonesMenuItem={milestonesMenuItem}
          />
        ))}
      {notFound && <NotFound textContent="milestones" />}
    </div>
  );
}

export default MilestonesMenuList;
