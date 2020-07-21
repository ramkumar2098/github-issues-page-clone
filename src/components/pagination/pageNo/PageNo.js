import React from 'react';
import style from './PageNo.module.css';

function PageNo({ pageNo, className }) {
  return (
    <a
      href="#"
      key={pageNo}
      className={(() =>
        className === 'selected'
          ? style.selected
          : className === 'page20'
          ? `${style.pageNo} ${style.page20}`
          : style.pageNo)()}
    >
      {pageNo}
    </a>
  );
}

export default PageNo;
