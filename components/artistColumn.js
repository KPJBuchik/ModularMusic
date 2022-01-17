import React from 'react';
import styles from '../styles/Artist.module.css'
import Draggable from 'react-draggable'; // The default


export default function artistColumn() {


    return (
        <div >
      <Draggable 
        axis="both"
        handle= ".handle"
        
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[50, 50]}
        scale={1}
     >
        <div className={styles.artistColumn} >
        <div className="handle">DRAG HERE</div>
          <div>Album Column</div>
        </div>
      </Draggable>
        </div>
    );
}
