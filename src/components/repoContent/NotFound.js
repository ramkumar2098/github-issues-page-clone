import React from 'react';

function NotFound({ textContent }) {
  return (
    <div style={{ padding: '9px', color: '#586069' }}>
      No {textContent} found. Sorry about that.
    </div>
  );
}

export default NotFound;
