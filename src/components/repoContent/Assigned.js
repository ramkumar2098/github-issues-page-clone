import React from 'react';
import { selectMenuItem } from './SelectMenuItem.module.css';

const assigned = 'Assigned to nobody';

function Assigned({ textContent, value }) {
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
