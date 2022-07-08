import React, {useState} from 'react';
import styles from './Form.module.scss'
import {CustomForm} from "../../../UI/Forms/CustomForm";
import {deleteSpan} from "../../../../functions/deleteSpan";


export const FirstStep = ({onUploadPosts}) => {
    deleteSpan(localStorage.getItem('promo_telephone'))
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Остались вопросы?</h2>
            <h5 className={styles.subtitle}>Позвоните нам</h5>
            <a href={`tel:${localStorage.getItem('tel')}`} className={styles.phone} onClick={() => window.yaCounter88846653.reachGoal('phone')}
            dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_telephone')}}></a>
            <h5 className={styles.subtitle}>или заполните заявку на бесплатную консультацию</h5>
            <CustomForm isRow={false} upload={(values)=>onUploadPosts(values)}/>
        </div>
    );
};

