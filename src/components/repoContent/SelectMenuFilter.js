import React, { useRef, useEffect } from 'react';
import style from './SelectMenuFilter.module.css';

function SelectMenuFilter({ value, setValue, placeholder }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={style.selectMenuFilter}>
      <input
        type="text"
        value={value}
        placeholder={`Filter ${placeholder}`}
        onChange={e => setValue(e.target.value)}
        ref={inputRef}
        className={style.selectMenuInput}
      />
    </div>
  );
}

export default SelectMenuFilter;
