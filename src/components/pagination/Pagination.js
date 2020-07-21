import React from 'react';
import { Previous, Next } from './navigationButtons/NavigationButtons';
import PageNo from './pageNo/PageNo';
import Gap from './gap/Gap';
import style from './Pagination.module.css';

function Pagination() {
  return (
    <div className={style.pagination}>
      <Previous />
      <PageNo pageNo="1" className="selected" />
      {[2, 3, 4, 5].map(pageNo => (
        <PageNo key={pageNo} pageNo={pageNo} />
      ))}
      <Gap />
      <PageNo pageNo="19" />
      <PageNo pageNo="20" className="page20" />
      <Next />
    </div>
  );
}

export default Pagination;
