import React from 'react';
import NotificationBellSVG from 'SVGs/NotificationBellSVG';
import style from 'components/toolTip/toolTip.module.css';

function NotificationBell({ marginRight }) {
  return (
    <a
      href="#"
      content="You have no unread notifications"
      className={style.toolTip}
      style={{ marginRight }}
    >
      <NotificationBellSVG />
    </a>
  );
}

export default NotificationBell;
