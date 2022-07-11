import {Modal} from "react-bootstrap";
import {ReactComponent as Close} from '../../assets/images/modal/close.svg'
import styles from './Modal.module.scss'
import React from "react";
import square from '../../assets/images/modal/square.png'
import {CLOSE_MODAL, UPLOAD_AND_NEXT_MODAL, useModalContext} from "../../contexts/ModalContext";
import {SuccessUpload} from "./SuccessUpload";
import {CustomForm} from "../UI/Forms/CustomForm";


const MainModal = () => {
    const {dispatch} = useModalContext()
    const {state} = useModalContext()
    console.log(state)
    return (
        <>
            <section className={styles.modal}>
                <h3 className={styles.title}>
                    {state.formTitle}
                </h3>
                <p className={styles.subtitle} dangerouslySetInnerHTML={{__html: localStorage.getItem('form_subtitle1')}}>
                </p>

                <a href={`tel:${localStorage.getItem('tel')}`} onClick={() => window.yaCounter88846653.reachGoal('phone')} className={styles.phoneNumber}
                   dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_telephone')}}>
                </a>
                <p className={styles.subtitle} dangerouslySetInnerHTML={{__html: localStorage.getItem('form_text2')}}>
                </p>
                <CustomForm isRow={true} upload={(values)=>dispatch({type:UPLOAD_AND_NEXT_MODAL,payload:values})}/>
            </section>
            <img src={square} alt={"square"} className={styles.img}/>
        </>
    )
}


export const ConsultationModal = () => {
    const {state, dispatch} = useModalContext()

    return (
        <Modal
            show={state.isOpen}
            onHide={() => dispatch({type: CLOSE_MODAL})}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {
                state.count === 1 ? <MainModal/> : <SuccessUpload/>
            }
            <div className={styles.close}>
                <Close onClick={() => dispatch({type: CLOSE_MODAL})}/>
            </div>
        </Modal>
    );
}


