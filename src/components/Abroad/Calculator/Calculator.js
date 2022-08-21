import React from 'react';
import styles from './Calculator.module.css'
import FormCalculator from "../../FormCalculator/FormCalculator";

const Calculator = () => {
    return (
        <section className={styles.main}>
            <div className="container">
                <h5 className={styles.title}>Калькулятор растаможки</h5>
                <FormCalculator />
            </div>
        </section>
    );
};

export default Calculator;