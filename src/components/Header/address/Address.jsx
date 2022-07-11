import React from 'react';
import styles from "./Addres.module.scss";
import map from "../../../assets/images/mapAddress.svg";
import cn from "classnames";

export const Address = ({isBlack}) => {
    return (
        <a href="/#footer"  className={cn(styles.text,isBlack?styles.black:styles.white
        )}>
            <img src={map} alt={"Map"} />
            <span className={styles.spanText}>Наш офис в Санкт-Петербурге<br/>
                     ул. Оптиков, д.1, корп.3</span>
        </a>
    );
};

