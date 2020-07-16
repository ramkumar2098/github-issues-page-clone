import React from 'react';
import style from './Status.module.css';

function Status(props) {
  const { statusEmoji, status } = props.issue;

  return (
    <div className={style.status}>
      {statusEmoji && <img src={statusEmoji} />}
      {status && <span>{status}</span>}
    </div>
  );
}

export default Status;
