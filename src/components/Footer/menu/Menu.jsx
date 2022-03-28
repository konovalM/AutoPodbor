import React from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";

const Col = ({firstLink,secondLink, thirdLink}) =>{
    return (
        <div className={styles.col}>
            <Link to={"/"} className={styles.link}>{firstLink}</Link>
            <Link to={"/"} className={styles.link}>{secondLink}</Link>
            <Link to={"/"} className={styles.link}>{thirdLink}</Link>
        </div>
    )
}


export const Menu = () => {
    return (
        <div className={styles.fullMenu}>
            <Col firstLink={"цены и услуги"} secondLink={"О компании"} thirdLink={"Подобранные авто"}/>
            <Col firstLink={"отзывы"} secondLink={"блог"} thirdLink={"контакты"}/>
        </div>
    );
};




