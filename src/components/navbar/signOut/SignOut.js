import React from 'react';
import SignOutSVG from '../../../SVGs/SignOutSVG';
import style from './SignOut.module.css';

function SignOut() {
  return (
    <a href="#" className={style.signOut}>
      <SignOutSVG />
      <span style={{ marginLeft: '0.3rem' }}>Sign out</span>
    </a>
  );
}

export default SignOut;
