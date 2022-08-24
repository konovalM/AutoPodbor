import React from 'react';
import styles from './Main.module.css'
import {Button} from "../../UI/button";
import promoImg from '../../../assets/images/catalog/manPromo.png'
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";

const Main = () => {
    const {dispatch} = useModalContext()
    return (
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.outside}>
                    <div className={styles.promoWrapper}>
                        <h3 className={styles.title}>
                            Каталог
                        </h3>
                        <p className={styles.promoText}>
                            Самые свежие предложения по продаже б/у автомобилей на рынках Европы. Мы готовы
                            проконсультировать вас бесплатно по телефону <b><span className={styles.bold}>+7 (999) 200 93 30</span></b>.
                        </p>
                        <Button text={'Получить консультацию'} className={styles.btn} onClick={() => dispatch({type: OPEN_MODAL, payload: { formTitle: 'Получить консультацию', type: 'euro'}})}/>
                    </div>
                    <img src={promoImg} alt="promo" className={styles.promoImg}/>
                </div>
            </div>
        </section>
    );
};

export default Main;