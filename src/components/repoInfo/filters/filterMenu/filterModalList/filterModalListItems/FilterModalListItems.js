import React from 'react';
import { filterModalListItems } from 'data/filterModalListItems';

function FilterModalListItems() {
  return filterModalListItems.map(filterModalListitem => (
    <li key={filterModalListitem}>
      <a href="#">{filterModalListitem}</a>
    </li>
  ));
}

export default FilterModalListItems;
