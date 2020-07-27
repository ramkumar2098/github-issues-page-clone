import React from 'react';

function RepoNavMenuItem({ menuItemRef, repoNavItem }) {
  return (
    <li>
      <a href="#" ref={menuItemRef}>
        {repoNavItem}
      </a>
    </li>
  );
}

export default RepoNavMenuItem;
