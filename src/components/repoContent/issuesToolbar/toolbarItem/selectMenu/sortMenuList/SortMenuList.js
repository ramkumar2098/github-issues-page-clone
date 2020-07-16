import React from 'react';
import SortMenuItem from './sortMenuItem/SortMenuItem';
import { sortMenuItems } from 'data/sortMenuItems';
import Reactions from './reactions/Reactions';

function SortMenuList() {
  return (
    <div style={{ overflow: 'auto' }}>
      {sortMenuItems.map((sortMenuItem, index) => (
        <SortMenuItem
          key={sortMenuItem}
          sortMenuItem={sortMenuItem}
          index={index}
        />
      ))}
      <Reactions />
    </div>
  );
}

export default SortMenuList;
