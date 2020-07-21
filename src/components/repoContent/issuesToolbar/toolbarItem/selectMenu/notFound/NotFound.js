import React from 'react';

function NotFound({ menuItem }) {
  return (
    <div style={{ padding: '9px', color: '#586069' }}>
      No {menuItem} found. Sorry about that.
    </div>
  );
}

export default NotFound;
