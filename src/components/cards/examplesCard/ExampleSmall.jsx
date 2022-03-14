import React from 'react';
import styles from './ExampleCard.module.scss'
import car from '../../../assets/images/example/car.png'
import {Button} from "../../UI/button";

export const ExampleSmall = () => {
    return (
        <div className={styles.small}>
            <img src={car}/>
            <div className={styles.row}>
                <div>
                    <h3 className={styles.textBold}>Toyota Land Cruiser 300</h3>
                    <h4 className={styles.prices}>400 000 руб., 2003 г.</h4>
                </div>
                <Button text={"Смотреть"} className={styles.button}/>
            </div>
        </div>
    );
};

