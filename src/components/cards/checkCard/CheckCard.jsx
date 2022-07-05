import React from 'react';
import styles from './CheckCard.module.scss'
import cn from "classnames";


export const CheckCard = ({src, title, text, num, isReversed}) => {
    let number = num;
    return (
        <div className={cn(styles.card,{
            [styles.reversed]:isReversed
        })}>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <h3 className={cn(styles.title, isReversed ? styles.titleRight : styles.titleLeft)} dangerouslySetInnerHTML={{__html: title}}></h3>
                    <p className={cn(styles.absolute, isReversed ? styles.absoluteRight : styles.absoluteLeft)}>{number}</p>
                </div>
                <p className={cn(styles.text, isReversed ? styles.textRight : styles.textLeft)} dangerouslySetInnerHTML={{__html: text}}></p>
            </div>
            <img src={src} className={styles.img}/>
        </div>
    );
};

