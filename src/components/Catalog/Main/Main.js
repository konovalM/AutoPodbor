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
                        <h3 className={styles.title}
                            dangerouslySetInnerHTML={{__html: localStorage.getItem('euro_catalog_title10')}}>
                        </h3>
                        <p className={styles.promoText}
                           dangerouslySetInnerHTML={{__html: localStorage.getItem('euro_catalog_text1')}}>
                        </p>
                        <p className={styles.promoText}
                           dangerouslySetInnerHTML={{__html: localStorage.getItem('euro_catalog_text2')}}>
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
