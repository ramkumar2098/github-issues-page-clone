import React, { useState, useEffect } from 'react';
import { contains } from 'utils/contains';
import LabelMenuItem from './labelMenuItem/LabelMenuItem';
import { labelMenuItems } from 'data/labelMenuItems';
import NotFound from '../notFound/NotFound';
import LabelMenuFooter from './labelMenuFooter/LabelMenuFooter';

function LabelMenuList({ value }) {
  const [notFound, setNotFound] = useState(false);
  let i = 0;

  useEffect(() => {
    i === labelMenuItems.length ? setNotFound(true) : setNotFound(false);
  });

  return (
    <>
      <div style={{ overflow: 'auto' }}>
        {labelMenuItems
          .filter(({ label }) => {
            !contains(label, value) && i++;
            return contains(label, value);
          })
          .map(labelMenuItem => (
            <LabelMenuItem
              key={labelMenuItem.label}
              labelMenuItem={labelMenuItem}
            />
          ))}
        {notFound && <NotFound menuItem="labels" />}
      </div>
      <LabelMenuFooter />
    </>
  );
}

export default LabelMenuList;
