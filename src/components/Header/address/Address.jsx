import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Addres.module.scss";
import map from "../../../assets/images/mapAddress.svg";
import cn from "classnames";

export const Address = ({isBlack}) => {
    return (
        // ссылка на футер
        <a href="/#footer"  className={cn(styles.text,isBlack?styles.black:styles.white
        )}>
            <img src={map} alt={"Map"} />
            <span className={styles.spanText}>Работаем в офисе:<br/>
                    г. СПб, ул. Оптиков, 1к3</span>
        </a>
    );
};

