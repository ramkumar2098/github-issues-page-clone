import React from 'react';

function RepoNavMenuItem({ menuItemRef, repoNavMenuItem }) {
  return (
    <li>
      <a href="#" ref={menuItemRef}>
        {repoNavMenuItem}
      </a>
    </li>
  );
}

export default RepoNavMenuItem;
