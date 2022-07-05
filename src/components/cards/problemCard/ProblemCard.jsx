import React from 'react';
import {ShadowCard} from "../shadowCard";
import styles from './ProblemCard.module.scss'
import {Circle} from "../../UI/circle/Circle";




export const ProblemCard = ({src, title,text,number}) => {
    return (
        <ShadowCard>
            <div className={styles.card}>
                <img src={src} className={styles.img} alt={""}/>
                <h3 className={styles.title} dangerouslySetInnerHTML={{__html: title}}></h3>
                <p className={styles.text} dangerouslySetInnerHTML={{__html: text}}></p>
                <Circle count={number}/>
            </div>
        </ShadowCard>
    );
};

