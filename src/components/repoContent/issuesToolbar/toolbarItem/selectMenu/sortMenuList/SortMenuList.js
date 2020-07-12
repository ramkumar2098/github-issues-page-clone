import React from 'react';
import SortMenuItem from './sortMenuItem/SortMenuItem';
import { sortMenuItems } from 'data/sortMenuItems';
import { v4 as uuidv4 } from 'uuid';
import Reactions from './reactions/Reactions';

function SortMenuList() {
  return (
    <div style={{ overflow: 'auto' }}>
      {sortMenuItems.map((sortMenuItem, index) => (
        <SortMenuItem
          key={uuidv4()}
          sortMenuItem={sortMenuItem}
          index={index}
        />
      ))}
      <Reactions />
    </div>
  );
}

export default SortMenuList;
