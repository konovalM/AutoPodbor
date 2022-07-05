import React from 'react';
import styles from './RoadToCenter.module.scss'


export const RoadToCenter = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title} dangerouslySetInnerHTML={{__html: localStorage.getItem('map_title1')}}>
            </h2>
            <p className={styles.text} dangerouslySetInnerHTML={{__html: localStorage.getItem('map_subtitle1')}}>
            </p>
        </div>
    );
};

