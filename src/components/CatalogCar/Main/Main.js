import React from 'react';
import styles from './Main.module.css'
import {Button} from "../../UI/button";

const Main = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h6 className={styles.carName}>
                    Toyota Land Cruiser 300
                </h6>
                <div className={styles.card}>

                </div>
                <Button text='Заказать автомобиль' className={styles.btnOrder}/>
            </div>
        </section>
    );
};

export default Main;