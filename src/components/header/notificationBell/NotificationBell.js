import React from 'react';
import NotificationBellSVG from 'SVGs/NotificationBellSVG';

function NotificationBell({ marginRight }) {
  return (
    <a href="#" style={{ marginRight, display: 'flex' }}>
      <NotificationBellSVG />
    </a>
  );
}

export default NotificationBell;
