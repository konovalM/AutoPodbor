import React from 'react';
import styles from './Main.module.css'
import promoImg from '../../../assets/images/catalog/manPromo.png'
import {AnimateButton} from "../../UI/animateButton/AnimateButton";

const Main = () => {
    return (
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.outside}>
                    <div className={styles.promoWrapper}>
                        <h3 className={styles.title}>
                            Каталог
                        </h3>
                        <p className={styles.promoText}>
                            Самые свежие предложения по продаже новых и б/у автомобилей на рынках Европы. Цены указаны
                            без учета стоимости транспортировки и растаможки. </p>
                        <p className={styles.promoText}>
                            Бесплатная консультация по тел.:&nbsp;<b><span
                            className={styles.bold}>+7 (999) 200 93 30</span></b>.
                        </p>
                        <AnimateButton text={'варианты в наличии'}/>
                    </div>
                    <img src={promoImg} alt="promo" className={styles.promoImg}/>
                </div>
            </div>
        </section>
    );
};

export default Main;
