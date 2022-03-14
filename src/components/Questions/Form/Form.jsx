import React, {useState} from 'react';
import styles from './Form.module.scss'
import {Link} from "react-router-dom";
import InputMask from 'react-input-mask';



export const Form = () => {
    const [value, setValue] = useState()
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Остались вопросы?</h2>
            <h5 className={styles.subtitle}>Позвоните нам</h5>
            <span className={styles.phone} >+7 (999) 200-93-30 </span>
            <h5 className={styles.subtitle}>или заполните заявку на бесплатную консультацию</h5>
            <label> Ваше имя</label>
            <input placeholder={"Иван Иванов"}/>
            <label>Ваш телефон</label>
            <InputMask
                mask="+7 (999) 999 99 99" maskChar="_"
                alwaysShowMask={true}
            />
            <span>
                При отправке данных вы соглашаетесь на обработку персональных данных
            </span>
            <button>Получить консультацию</button>
        </div>
    );
};

