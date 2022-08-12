import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.scss'
import cn from 'classnames'
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";

const NavItem = ({children}) => {
    return (
        <li className={styles.item} >
            {children}
        </li>
    )
}

const NavList = () => {
    const {dispatch} = useModalContext()
    return (
        <ul className={styles.list}>
            <NavItem>
                <Link to={'/#services'}>цены и Услуги</Link>
            </NavItem>
            <NavItem>
                <Link to={'/about'}>О компании</Link>
            </NavItem>

            <NavItem>
                <Link to={'/#examples'}>
                    подобранные авто
                </Link>
            </NavItem>

            <NavItem>
                <Link to={'/#feedback'}>
                    отзывы
                </Link>
            </NavItem>

            <NavItem>
                <Link to={'/blog'}>блог</Link>
            </NavItem>

            <NavItem >
                <span onClick={()=>dispatch({type:OPEN_MODAL, payload: {formTitle: 'Остались вопросы?', title: 'Обратная связь'}})} className={styles.spanFontFamily}>Контакты</span>
            </NavItem>
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


export const NavigationMobile = ({ setIsOpen }) => {
    const {dispatch} = useModalContext()
    return (
        <ul className={styles.list}>
            <NavItem>
                <Link to={'/#services'}>цены и Услуги</Link>

            </NavItem>

            <NavItem>
                <Link to={'/about'}>О компании</Link>
            </NavItem>

            <NavItem>
                <Link to={'/#examples'}>подобранные авто</Link>

            </NavItem>
            <NavItem>
                <Link to={'/#feedback'}>отзывы</Link>

            </NavItem>
            <NavItem>
                <Link to={'/blog'}>блог</Link>
            </NavItem>
            <NavItem >
                <span onClick={()=>dispatch({type:OPEN_MODAL})} className={styles.spanFontFamily}>Контакты</span>
            </NavItem>
        </ul>
    )
}

