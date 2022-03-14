import React from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";

const Row = ({firstLink,secondLink}) =>{
    return (
        <div className={styles.row}>
            <Link to={"/"} className={styles.link}>{firstLink}</Link>
            <Link to={"/"} className={styles.link}>{secondLink}</Link>
        </div>
    )
}


export const Menu = () => {
    return (
        <div className={styles.fullMenu}>
            <Row firstLink={"цены и услуги"} secondLink={"отзывы"}/>
            <Row firstLink={"О компании"} secondLink={"блог"}/>
            <Row firstLink={"Подобранные авто"} secondLink={"контакты"}/>
        </div>
    );
};




