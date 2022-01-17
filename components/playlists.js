import React from 'react';
import styles from '../styles/Playlists.module.css'
import Draggable from 'react-draggable'; // The default

// CommonJS

export default function Playlists() {


    return (
        <div  >
      <Draggable 
        axis="both"
        handle= ".handle"
        
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[50, 50]}
        scale={1}
     >
        <div className={styles.container} >
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
        </div>
    );
}
