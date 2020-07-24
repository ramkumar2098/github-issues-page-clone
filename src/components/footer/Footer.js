import React from 'react';
import FooterItem from './footerItem/FooterItem';
import { footerItems, footerItems2 } from 'data/footerItems';
import GithubLogo from './githubLogo/GithubLogo';
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div>
        <div className={style.footer}>
          <span>© 2020 GitHub, Inc.</span>
          {footerItems.map(footerItem => (
            <FooterItem key={footerItem} footerItem={footerItem} />
          ))}
        </div>
        <GithubLogo title="GitHub" />
        <div className={style.footer}>
          {footerItems2.map(footerItem => (
            <FooterItem key={footerItem} footerItem={footerItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
