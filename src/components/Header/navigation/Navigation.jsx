import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.scss'
import cn from 'classnames'
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";

const NavItem = ({children}) => {
    return (
        <li className={styles.item}>
            {children}
        </li>
    )
}

const NavList = () => {
    const {dispatch, state} = useModalContext()
    return (
        <ul className={styles.list}>
            <NavItem>
                {
                    state.discount ?
                        <Link to={'/discount#services'}>цены и Услуги</Link>
                        :
                        <Link to={'/#services'}>цены и Услуги</Link>
                }
            </NavItem>
            <NavItem>
                <Link to={'/about'}>О компании</Link>
            </NavItem>

            <NavItem>
                {
                    state.discount ?
                        <Link to={'/discount#examples'}>
                            подобранные авто
                        </Link>
                        :
                        <Link to={'/#examples'}>
                            подобранные авто
                        </Link>
                }

            </NavItem>

            <NavItem>
                {
                    state.discount ?
                        <Link to={'/discount#feedback'}>
                            отзывы
                        </Link>
                        :
                        <Link to={'/#feedback'}>
                            отзывы
                        </Link>
                }

            </NavItem>

            <NavItem>
                <Link to={'/blog'}>блог</Link>
            </NavItem>

            <NavItem>
                <span onClick={() => dispatch({
                    type: OPEN_MODAL,
                    payload: {formTitle: 'Остались вопросы?', title: 'Обратная связь'}
                })} className={styles.spanFontFamily}>Контакты</span>
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


export const NavigationMobile = ({setIsOpen}) => {
    const {dispatch, state} = useModalContext()
    return (
        <ul className={styles.list}>
            <NavItem>
                {
                    state.discount ?
                        <Link to={'/discount#services'}>цены и Услуги</Link>
                        :
                        <Link to={'/#services'}>цены и Услуги</Link>
                }
            </NavItem>

            <NavItem>
                <Link to={'/about'}>О компании</Link>
            </NavItem>

            <NavItem>
                {
                    state.discount ?
                        <Link to={'/discount#examples'}>подобранные авто</Link>
                        :
                        <Link to={'/#examples'}>подобранные авто</Link>
                }
            </NavItem>
            <NavItem>
                {
                    state.discount ?
                        <Link to={'/discount#feedback'}>отзывы</Link>
                        :
                        <Link to={'/#feedback'}>отзывы</Link>
                }


            </NavItem>
            <NavItem>
                <Link to={'/blog'}>блог</Link>
            </NavItem>
            <NavItem>
                <span onClick={() => dispatch({type: OPEN_MODAL})} className={styles.spanFontFamily}>Контакты</span>
            </NavItem>
        </ul>
    )
}

