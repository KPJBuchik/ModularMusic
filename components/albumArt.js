import React from 'react';
import styles from '../styles/AlbumArt.module.css'
import Draggable from 'react-draggable'; // The default


export default function AlbumArt() {


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
        <div className={styles.albumCover} >
        <div className="handle">DRAG HERE</div>
          <div>ALBUM ART</div>
        </div>
      </Draggable>
        </div>
    );
}
