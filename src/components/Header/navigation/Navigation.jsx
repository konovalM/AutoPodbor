import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.scss'
import cn from 'classnames'
const NavItem = ({text}) => {
    return (
        <li className={styles.item}>
            <Link to={"#"}>{text}</Link>
        </li>
    )
}


const NavList = () => {
    return (
        <ul className={styles.list}>
            <NavItem text={"цены и Услуги"}/>
            <NavItem text={"О компании"}/>
            <NavItem text={"подобранные авто"}/>
            <NavItem text={"отзывы"}/>
            <NavItem text={"блог"}/>
            <NavItem text={"Контакты"}/>
        </ul>
    )
}


export const Navigation = ({className}) => {
    return (
        <nav className={cn(styles.navigation, className)}>
            <NavList/>
        </nav>
    );
};


