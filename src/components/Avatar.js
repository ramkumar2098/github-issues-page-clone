import React from 'react';
import avatar from '../images/avatar.png';

const style = {
  width: '20px',
  borderRadius: '50%',
  marginRight: '0.3rem',
};

function Avatar() {
  return <img src={avatar} alt="@ramkumar2098" style={style}></img>;
}

export default Avatar;
