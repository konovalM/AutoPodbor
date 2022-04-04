import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.scss'
import cn from 'classnames'
const NavItem = ({text,link='#'}) => {
    return (
        <li className={styles.item}>
            <Link to={link}>{text}</Link>
        </li>
    )
}


const NavList = () => {
    return (
        <ul className={styles.list}>
            <NavItem text={"цены и Услуги"}/>
            <NavItem text={"О компании"} link={'/about'}/>
            <NavItem text={"подобранные авто"}/>
            <NavItem text={"блог"} link={'/blog'}/>
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


export const NavigationMobile = () => {
    return (
        <ul className={styles.list}>
            <NavItem text={"Услуги"}/>
            <NavItem text={"О компании"} link={'/about'}/>
            <NavItem text={"подобранные авто"}/>
            <NavItem text={"блог"} link={"/blog"}/>
            <NavItem text={"Контакты"}/>
        </ul>
    )
}

