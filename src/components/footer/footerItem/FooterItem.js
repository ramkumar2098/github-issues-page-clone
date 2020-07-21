import React from 'react';
import style from './FooterItem.module.css';

function FooterItem({ footerItem }) {
  return (
    <a href="#" className={style.footerItem}>
      {footerItem}
    </a>
  );
}

export default FooterItem;
