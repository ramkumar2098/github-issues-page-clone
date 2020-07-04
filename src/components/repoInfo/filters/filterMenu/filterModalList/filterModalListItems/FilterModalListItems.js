import React from 'react';
import { filterModalListItems } from '../../../../../../data/filterModalListItems';
import { v4 as uuidv4 } from 'uuid';

function FilterModalListItems() {
  return filterModalListItems.map(filterModalListitem => (
    <li key={uuidv4()}>
      <a href="#">{filterModalListitem}</a>
    </li>
  ));
}

export default FilterModalListItems;
