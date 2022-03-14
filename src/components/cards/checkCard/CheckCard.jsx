import React from 'react';
import styles from './CheckCard.module.scss'
import cn from "classnames";


export const CheckCard = ({src,title,text,isReversed=false}) => {
    return (
        <div className={cn(styles.card,{
            [styles.reversed]:isReversed
        })}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
            <img src={src}/>
        </div>
    );
};

