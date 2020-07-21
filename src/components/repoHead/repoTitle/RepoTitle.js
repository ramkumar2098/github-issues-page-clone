import React, { useState } from 'react';
import RepoSVG from 'SVGs/RepoSVG';
import AboutPopover from './aboutPopover/AboutPopover';
import { about } from 'data/about';
import style from './RepoTitle.module.css';

function RepoTitle() {
  const [displayAboutPopover, setDisplayAboutPopover] = useState(false);

  let id;

  const handleMouseOver = () => {
    id = setTimeout(() => {
      setDisplayAboutPopover(true);
    }, 200);
  };

  const handleMouseOut = () => {
    id
      ? clearTimeout(id)
      : (id = setTimeout(() => {
          setDisplayAboutPopover(false);
        }, 200));
  };

  return (
    <div className={style.repoTitle}>
      <RepoSVG />
      <a
        href="#"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={style.title}
      >
        facebook
      </a>
      {displayAboutPopover && (
        <AboutPopover
          about={about}
          keepAboutPopoverOpen={() => clearTimeout(id)}
          closeAboutPopoverOpen={() => setDisplayAboutPopover(false)}
        />
      )}
      <span className={style.slash}>/</span>
      <a href="#" className={style.subTitle}>
        react
      </a>
    </div>
  );
}

export default RepoTitle;
