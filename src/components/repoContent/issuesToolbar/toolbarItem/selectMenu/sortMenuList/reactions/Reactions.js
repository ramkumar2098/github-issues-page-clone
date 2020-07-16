import React from 'react';
import { emojis } from 'data/emojis';
import style from './Reactions.module.css';

function Reactions() {
  return (
    <div>
      <div className={style.reactionsHeader}>Most reactions</div>
      <div className={style.reactions}>
        {emojis.map((emoji, index) => (
          <a href="#" key={index}>
            <img src={emoji} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Reactions;
