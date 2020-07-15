import React from 'react';
import Issue from './Issue';
import { issues } from 'data/issues';
import style from './Issues.module.css';

function Issues() {
  return (
    <div className={style.issues}>
      {issues.map(issue => (
        <Issue issue={issue} />
      ))}
    </div>
  );
}

export default Issues;
