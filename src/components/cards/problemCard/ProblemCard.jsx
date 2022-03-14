import React from 'react';
import {ShadowCard} from "../shadowCard";
import millage from '../../../assets/images/problems/mileage.jpg'
import styles from './ProblemCard.module.scss'

const Circle = ({count}) => {
    return (
        <div className={styles.circle}>
            <span className={styles.textInner}>0{count}</span>
        </div>
    )
}


export const ProblemCard = ({src, title,text,number}) => {
    return (
        <ShadowCard>
            <div className={styles.card}>
                <img src={src} className={styles.img} alt={""}/>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
                <Circle count={number}/>
            </div>
        </ShadowCard>
    );
};

