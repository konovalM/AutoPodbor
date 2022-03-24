import {Modal} from "react-bootstrap";
import {ReactComponent as Close} from '../../assets/images/modal/close.svg'
import styles from './Modal.module.scss'
import {NamedInput, PhoneNumberInput} from "../UI/inputs";
import React, {useState} from "react";
import {Button} from "../UI/button";
import square from '../../assets/images/modal/square.png'
import {useModalContext} from "../../contexts/ModalContext";
import {postFeedback} from "../../api/feedbackAPI";


const FirstStep = ({onNextStep}) => {
    const { fullName,
        telephone,
        setFullName,
        setTelephone} =useModalContext()
    console.log(telephone)
    return (
        <>
            <section className={styles.modal}>
                <h3 className={styles.title}>
                    Остались вопросы?
                </h3>
                <p className={styles.subtitle}>
                    Позвоните нам
                </p>

                <a href={"/"} className={styles.phoneNumber}>
                    +7 (999) 200-93-30
                </a>
                <p className={styles.subtitle}>
                    или заполните заявку на бесплатную консультацию
                </p>


                <form className={styles.form}>
                    <div className={styles.fields}>
                        <NamedInput label={"Ваше имя"} placeholder={"Иван Иванов"} value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                        <PhoneNumberInput label={"Ваш телефон"} value={telephone} onChange={(e)=>setTelephone(e.target.value)}/>
                    </div>
                    <Button text={"Получить консультацию"} className={styles.btn} onClick={onNextStep}/>
                </form>
                <p className={styles.disclaimer}>При отправке данных вы соглашаетесь на обработку персональных
                    данных</p>
            </section>
            <img src={square} alt={"square"} className={styles.img}/>
        </>
    )
}


export const SecondStep = () => {
    return (
        <>

            <section className={styles.modal}>
                <h3 className={styles.title}>
                    Спасибо, мы скоро с вами<br/> свяжемся!
                </h3>
                <p className={styles.simpleText}>
                    А пока что вы можете познакомиться с нашей группой <span
                    className={styles.href}>ВКонтакте</span> и каналом на <span
                    className={styles.href}>YouTube</span>
                </p>
            </section>
        </>
    )
}


export const ConsultationModal = (props) => {
    const [step, setStep] = useState(1)
    const {setShow} = useModalContext()
    const onHideButton = (e) => {
        setStep(1)
        setShow(false)
    }

    const onNextStep = () => {
        setStep(2)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {
                step === 1 ? <FirstStep onNextStep={onNextStep}/>: <SecondStep/>
            }

            <div className={styles.close}>
                <Close onClick={onHideButton}/>
            </div>
        </Modal>
    );
}


