import React from 'react';
import styles from './Examples.module.scss'
import {ExampleBig} from "../cards/examplesCard";
import {ExampleSmall} from "../cards/examplesCard";

export const Examples = () => {
    return (
        <section style={{background:"black"}} className={styles.wrapper}>
            <h2 className={styles.title}>Примеры нашей работы</h2>
            <ExampleBig/>
            <div className={styles.content}>
                <ExampleSmall/>
                <ExampleSmall/>
                <ExampleSmall/>
                <ExampleSmall/>
            </div>
        </section>
    );
};

