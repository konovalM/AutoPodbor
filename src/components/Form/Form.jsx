import React, {useState} from 'react';
import styles from './Form.module.scss'
import {Button} from "../UI/button";
import {PhoneNumberInput} from "../UI/inputs";
import {NamedInput} from "../UI/inputs";
import {useModalContext} from "../../contexts/ModalContext";
import {SecondStep} from "../Modal/Modal";

export const StyledForm = ({setStep}) => {
    const onSendInfo = (e) => {
        e.preventDefault()
        setStep(2)
    }

    return (
        <>
            <form className={styles.form}>
                <div className={styles.fields}>
                    <NamedInput label={"Ваше имя"} placeholder={"Иванов Иван"}/>
                    <PhoneNumberInput label={"Ваш телефон"}/>
                </div>
                <Button text={"Получить консультацию"} className={styles.btn} onClick={onSendInfo}/>
            </form>
        </>
    )
}

export const Form = () => {
    const [step, setStep] = useState(1)

    return (
        <section className={styles.wrapper}>
            {step === 1 ? <div className={styles.content}>
                <h2 className={styles.title}>
                    Найдем автомобиль для вас
                </h2>
                <StyledForm setStep={setStep}/>

                <p className={styles.disclaimer}>При отправке данных вы соглашаетесь на <span
                    className={styles.underline}>обработку персональных данных</span></p>
            </div> : <SecondStep/>}

        </section>
    );
};

