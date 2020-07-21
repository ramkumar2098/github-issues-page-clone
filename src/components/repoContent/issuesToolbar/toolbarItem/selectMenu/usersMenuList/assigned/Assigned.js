import React from 'react';
import { selectMenuItem } from '../../selectMenuItem/SelectMenuItem.module.css';

function Assigned({ toolbarItem, value }) {
  const assigned = 'Assigned to nobody';

  return (
    toolbarItem === 'Assignee' &&
    (!value || assigned.toLowerCase().includes(value.trim().toLowerCase())) && (
      <a href="#" className={selectMenuItem} style={{ fontWeight: 600 }}>
        {assigned}
      </a>
    )
  );
}

export default Assigned;
