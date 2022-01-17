import React from 'react';
import styles from '../styles/ControlBar.module.css'
import Draggable from 'react-draggable'; // The default


export default function ControlBar() {


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
        <div className={styles.controlBar} >
        <div className="handle">DRAG HERE</div>
          <div>ControlBar</div>
        </div>
      </Draggable>
        </div>
    );
}
