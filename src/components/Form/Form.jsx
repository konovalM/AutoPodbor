import React from 'react';
import styles from './Form.module.scss'
import {Button} from "../UI/button";
import {PhoneNumberInput} from "../UI/inputs";
import {NamedInput} from "../UI/inputs";
export const Form = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Найдем автомобиль для вас
                </h2>
                <form className={styles.form}>
                    <div className={styles.fields}>
                        <NamedInput label={"Ваше имя"}/>
                        <PhoneNumberInput label={"Ваш телефон"}/>
                    </div>
                    <Button text={"Получить консультацию"}/>
                </form>

                <p className={styles.disclaimer}>При отправке данных вы соглашаетесь на обработку персональных данных</p>
            </div>
        </section>
    );
};

