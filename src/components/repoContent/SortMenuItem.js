import React from 'react';
import { selectMenuItem } from './SelectMenuItem.module.css';
import CheckSVG from '../../SVGs/CheckSVG';

function SortMenuItem({ sortMenuItem, index }) {
  const aStyle = () =>
    index ? { display: 'block' } : { paddingLeft: '16px', display: 'flex' };

  const spanStyle = () =>
    index ? { color: '#24292e' } : { color: '#24292e', marginLeft: '8px' };

  return (
    <a href="#" className={selectMenuItem} style={aStyle()}>
      {!index && (
        <span style={{ display: 'flex' }}>
          <CheckSVG />
        </span>
      )}
      <span style={spanStyle()}>{sortMenuItem}</span>
    </a>
  );
}

export default SortMenuItem;
