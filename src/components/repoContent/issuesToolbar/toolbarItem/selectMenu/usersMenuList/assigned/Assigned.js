import React from 'react';
import { selectMenuItem } from '../../selectMenuItem/SelectMenuItem.module.css';

function Assigned({ textContent, value }) {
  const assigned = 'Assigned to nobody';

  return (
    textContent === 'Assignee' &&
    (!value || assigned.toLowerCase().includes(value.trim().toLowerCase())) && (
      <a href="#" className={selectMenuItem} style={{ fontWeight: 600 }}>
        {assigned}
      </a>
    )
  );
}

export default Assigned;
