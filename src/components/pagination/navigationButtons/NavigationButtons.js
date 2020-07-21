import React from 'react';
import style from './NavigationButtons.module.css';

export function Previous() {
  return <span className={style.previous}>Previous</span>;
}

export function Next() {
  return (
    <a href="#" className={style.next}>
      Next
    </a>
  );
}
