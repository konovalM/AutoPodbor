import React from 'react';
import styles from './Call.module.scss'
import callerBackground from '../../../assets/images/call.svg'
import caller from '../../../assets/images/call.png'
import cn from "classnames";
export const Call = ({isBlack}) => {
    return (
        <div className={styles.content}>
            <div className={styles.imgContainer}>
                <img src={callerBackground} alt={"Call operator"} className={styles.imgBcg}/>
                <img src={caller} alt={"Call operator"} className={styles.imgPerson}/>
            </div>
            <div className={styles.textContent}>
                <a href={"#"} className={cn(styles.title,isBlack?styles.black:styles.white
                )}>+7 (999) 200-93-30</a>
                <span className={styles.orderNumber}>Заказать звонок</span>
            </div>
        </div>
    );
};

