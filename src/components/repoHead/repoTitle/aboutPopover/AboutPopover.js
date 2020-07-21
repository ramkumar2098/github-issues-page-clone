import React from 'react';
import AboutPopoverBody from './aboutPopoverBody/AboutPopoverBody';
import AboutPopoverFooter from './aboutPopoverFooter/AboutPopoverFooter';
import style from './AboutPopover.module.css';

function AboutPopover(props) {
  const { keepAboutPopoverOpen, closeAboutPopoverOpen } = props;

  return (
    <div
      onMouseOver={keepAboutPopoverOpen}
      onMouseLeave={closeAboutPopoverOpen}
      className={style.aboutPopover}
    >
      <AboutPopoverBody {...props} />
      <AboutPopoverFooter {...props} />
    </div>
  );
}

export default AboutPopover;
