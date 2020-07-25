import React from 'react';
import { selectMenuItem } from '../../selectMenuItem/SelectMenuItem.module.css';
import style from './LabelMenuItem.module.css';

function LabelMenuItem({ labelMenuItem }) {
  const { backgroundColor, label, description, img } = labelMenuItem;

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
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <span className={style.label}>{label}</span>
          {description && (
            <div className={style.description}>{description}</div>
          )}
          {img && <img src={img} className={style.img}></img>}
        </span>
      </span>
    </a>
  );
}

export default LabelMenuItem;
