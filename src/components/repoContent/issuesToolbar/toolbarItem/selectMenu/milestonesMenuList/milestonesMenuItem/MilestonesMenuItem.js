import React from 'react';
import { selectMenuItem } from '../../selectMenuItem/SelectMenuItem.module.css';

function MilestonesMenuItem({ milestonesMenuItem }) {
  return (
    <a href="#" className={selectMenuItem}>
      <strong>{milestonesMenuItem}</strong>
    </a>
  );
}

export default MilestonesMenuItem;
