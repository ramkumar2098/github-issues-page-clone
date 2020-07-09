import React from 'react';
import style from './LabelMenuFooter.module.css';

function LabelMenuFooter() {
  return (
    <div className={style.labelMenuFooter}>
      Use <kbd>alt</kbd> + <kbd>click/return</kbd> to exclude labels.
    </div>
  );
}

export default LabelMenuFooter;
