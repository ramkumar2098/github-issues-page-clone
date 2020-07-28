import React from 'react';
import { contains } from 'utils/contains';
import { selectMenuItem } from '../../selectMenuItem/SelectMenuItem.module.css';

function Assigned({ toolbarItem, value }) {
  const { toolbarItemName } = toolbarItem;
  const assigned = 'Assigned to nobody';

  return (
    toolbarItemName === 'Assignee' &&
    (!value || contains(assigned, value)) && (
      <a href="#" className={selectMenuItem} style={{ fontWeight: 600 }}>
        {assigned}
      </a>
    )
  );
}

export default Assigned;
