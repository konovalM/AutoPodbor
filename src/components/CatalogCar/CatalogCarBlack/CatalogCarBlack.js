import React from 'react';
import styles from './CatalogCarBlack.module.css'
import {FormBlock} from "../../FormBlock";

const CatalogCarBlack = () => {
    return (
        <section className={styles.wave}>
            <div className={styles.black}>
                <div className="container">
                    <FormBlock/>
                </div>
            </div>
        </section>
    );
};

export default CatalogCarBlack;