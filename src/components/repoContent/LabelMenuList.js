import React, { useState, useEffect } from 'react';
import LabelMenuItem from './LabelMenuItem';
import { labelMenuItems } from '../../data/labelMenuItems';
import { v4 as uuidv4 } from 'uuid';
import NotFound from './NotFound';

function LabelMenuList({ value }) {
  const [notFound, setNotFound] = useState(false);
  let i = 0;

  useEffect(() => {
    i === labelMenuItems.length ? setNotFound(true) : setNotFound(false);
  });

  const isValid = string =>
    string.toLowerCase().includes(value.trim().toLowerCase());

  return (
    <div style={{ overflow: 'auto' }}>
      {labelMenuItems
        .filter(({ label }) => {
          !isValid(label) && i++;
          return isValid(label);
        })
        .map(labelMenuItem => (
          <LabelMenuItem key={uuidv4()} labelMenuItem={labelMenuItem} />
        ))}
      {notFound && <NotFound textContent="labels" />}
    </div>
  );
}

export default LabelMenuList;
