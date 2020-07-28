import React from 'react';
import { useAttachEvents } from 'hooks/useAttachEvents';
import WatchMenuItem from './watchMenuItem/WatchMenuItem';
import { watchMenuItems } from 'data/watchMenuItems';
import style from './WatchMenu.module.css';

function WatchMenu({ closeWatchMenu }) {
  useAttachEvents('watchMenu', closeWatchMenu);

  return (
    <div className={style.watchMenu + ' watchMenu'}>
      <div className={style.watchMenuHeader}>Notifications</div>
      {watchMenuItems.map(watchMenuItem => (
        <WatchMenuItem
          key={watchMenuItem.heading}
          watchMenuItem={watchMenuItem}
        />
      ))}
    </div>
  );
}

export default WatchMenu;
