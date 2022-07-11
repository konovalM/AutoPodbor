import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.scss'
import cn from 'classnames'
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";
import {Link as LinkScroll} from 'react-scroll'

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
                <a href={'/#services'}>цены и Услуги</a>
            </NavItem>
            <NavItem>
                <Link to={'/about'}>О компании</Link>
            </NavItem>

            <NavItem>
                <a href={'/#examples'}>
                    подобранные авто
                </a>
            </NavItem>

            <NavItem>
                <a href={'/#feedback'}>
                    отзывы
                </a>
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
    const anotherParts = ['about', 'article', 'service', 'blog'];
    const scrollTo = (idName) => {
        setIsOpen(false)
        const pageY = document.getElementById(idName).getBoundingClientRect().y
        setTimeout(() => {
            window.scrollTo(0, pageY)
        })
    }
    return (
        <ul className={styles.list}>
            <NavItem>
                {
                    !anotherParts.every((item) => {
                        return item !== document.location.href.split('/')[3]
                    })
                        ?
                        <a href={'/#services'}>цены и Услуги</a>
                        :
                        <LinkScroll className={styles.linkScroll} onClick={() => scrollTo('services')}>
                            цены и Услуги
                        </LinkScroll>
                }
            </NavItem>

            <NavItem>
                <Link to={'/about'}>О компании</Link>
            </NavItem>

            <NavItem>
                {
                    !anotherParts.every((item) => {
                        return item !== document.location.href.split('/')[3]
                    })
                        ?
                        <a href={`/#examples`}>подобранные авто</a>
                        :
                        <LinkScroll to={'examples'} className={styles.linkScroll} onClick={() => scrollTo('examples')}>
                            подобранные авто
                        </LinkScroll>
                }
            </NavItem>
            <NavItem>
                {
                    !anotherParts.every((item) => {
                        return item !== document.location.href.split('/')[3]
                    })
                        ?
                        <a href={`/#feedback`}>отзывы</a>
                        :
                        <LinkScroll to={'feedback'} className={styles.linkScroll} onClick={() => scrollTo('feedback')}>
                            отзывы
                        </LinkScroll>
                }
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

