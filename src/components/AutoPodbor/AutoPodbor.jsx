import React from 'react';
import styles from './AutoPodbor.module.scss'
import {Button} from "../UI/button";
import car from '../../assets/images/servicePage/car.png'
import {OPEN_MODAL, useModalContext} from "../../contexts/ModalContext";
import {useLocation} from "react-router";


const HeaderBlock = ({service}) => {
    return (
        <div className={styles.headerBlock}>
            <h1 className={styles.title}>{service.title}</h1>
            <h3 className={styles.subtitle}>Стоимость: {service.price_from} ₽</h3>
            <p className={styles.text}>Цена услуги фиксированная и не меняется в процессе работы. Общая стоимость работ
                может измениться
                только в случае заказа дополнительных услуг.</p>
        </div>
    )
}


const EnterInService = ({service}) => {
    const {dispatch} = useModalContext()
    const location = useLocation()
    return (
        <div className={styles.box}>
            <h3 className={styles.title}>Входит в услугу</h3>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div dangerouslySetInnerHTML={{__html: service.service_include}}/>
            </div>
            <div/>
            <div className={styles.btnWrapper}>
                <Button text={"Заказать услугу"} className={styles.btn} onClick={() => dispatch({
                    type: OPEN_MODAL,
                    payload: {
                        title: service.title,
                        formTitle: 'Заказать услугу',
                        type: location.pathname.includes('abroad') ? 'euro' : 'local'
                    }
                })}/>
            </div>
            <img className={styles.img} src={service.background_image} alt={"car"}/>

        </div>
    )
}

export const AutoPodbor = ({service}) => {
    return (
        <section className={styles.wrapper}>
            <div>
                <HeaderBlock service={service}/>
                <EnterInService service={service}/>
            </div>
        </section>
    );
};



