import React from 'react';
import { emojis } from '../../data/emojis';
import { v4 as uuidv4 } from 'uuid';
import style from './Reactions.module.css';

function Reactions() {
  return (
    <div>
      <div className={style.reactionsHeader}>Most reactions</div>
      <div className={style.reactions}>
        {emojis.map(emoji => (
          <a href="#" key={uuidv4()}>
            <img src={emoji} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Reactions;
