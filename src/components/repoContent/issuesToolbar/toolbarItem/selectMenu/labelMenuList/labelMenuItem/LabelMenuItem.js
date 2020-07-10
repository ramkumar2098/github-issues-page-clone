import React from 'react';
import { selectMenuItem } from '../../selectMenuItem/SelectMenuItem.module.css';
import style from './LabelMenuItem.module.css';

function LabelMenuItem({ labelMenuItem }) {
  const { backgroundColor, label } = labelMenuItem;

  return (
    <a href="#" className={selectMenuItem} style={{ display: 'block' }}>
      <span
        className={style.labelMenuItem}
        style={(() => backgroundColor && { lineHeight: '1.25' })()}
      >
        {backgroundColor && (
          <span
            className={style.colorSwatch}
            style={{ backgroundColor }}
          ></span>
        )}
        <span className={style.label}>{label}</span>
      </span>
    </a>
  );
}

export default LabelMenuItem;
