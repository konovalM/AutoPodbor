import React from 'react';
import styles from './Calculator.module.css'
import FormCalculator from "../../FormCalculator/FormCalculator";
import notebook from '../../../assets/images/abroad/penAndNotebook.png'
import calculator from '../../../assets/images/abroad/CalcAndCash.png'

const Calculator = () => {
    return (
        <section className={styles.main}>
            <img src={notebook} alt="notebook" className={styles.notebook}/>
            <img src={calculator} alt="calculator" className={styles.calculator}/>
            <div className="container">
                <h5 className={styles.title}>Калькулятор растаможки</h5>
                <FormCalculator />
            </div>
        </section>
    );
};

export default Calculator;