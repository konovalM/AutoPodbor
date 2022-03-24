import React, {useState} from 'react';
import styles from './Form.module.scss'
import {Link} from "react-router-dom";
import InputMask from 'react-input-mask';
import {NamedInput, PhoneNumberInput} from "../../../UI/inputs";
import {Button} from "../../../UI/button";


export const Form = () => {
    const [value, setValue] = useState()

    return (
        <div className={styles.wrapper}>

            <h2 className={styles.title}>Остались вопросы?</h2>
            <h5 className={styles.subtitle}>Позвоните нам</h5>
            <span className={styles.phone}>+7 (999) 200-93-30 </span>
            <h5 className={styles.subtitle}>или заполните заявку на бесплатную консультацию</h5>
            <div style={{
                display:"flex",
                flexDirection:"column",
                gap:"10px"
            }}>
                <NamedInput label={"Ваше имя"} placeholder={"Иван Иванов"}/>
                <PhoneNumberInput label={"Ваш телефон"}/>
            </div>
            <span className={styles.personal}>
                При отправке данных вы соглашаетесь на обработку персональных данных
            </span>
            <Button text={"Получить консультацию"} className={styles.btn}/>
        </div>
    );
};

