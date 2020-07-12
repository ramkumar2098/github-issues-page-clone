import React from 'react';
import NotificationBellSVG from 'SVGs/NotificationBellSVG';

function NotificationBell({ marginRight }) {
  return (
    <a href="#" style={{ marginRight }}>
      <NotificationBellSVG />
    </a>
  );
}

export default NotificationBell;
