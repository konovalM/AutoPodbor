import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.scss'
import cn from 'classnames'
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";
import {useLocation} from "react-router";

const NavItem = ({children}) => {
    return (
        <li className={styles.item}>
            {children}
        </li>
    )
}

const NavList = ({isAbroad}) => {
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
                {
                    state.discount ?
                        <Link to={'/discount#garantier'}>гарантии</Link>
                        :
                        <Link
                            to={'/#garantier'}>гарантии</Link>
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
            {/* <NavItem>
                <Link to={'/abroad'}>Авто из-за рубежа</Link>
            </NavItem> */}
        </ul>
    )
}

// const NavListAbroad = () => {
//     const {dispatch} = useModalContext()
//     return (
//         <ul className={styles.list}>
//             <NavItem>
//                 <Link to={'/abroad#services'}>цены и Услуги</Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad/catalog'}>каталог</Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad#custom-clearance'}>растаможка</Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad#examples'}>
//                     подобранные авто
//                 </Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad#feedback'}>
//                     отзывы
//                 </Link>
//             </NavItem>
//             <NavItem>
//                 <span onClick={() => dispatch({
//                     type: OPEN_MODAL,
//                     payload: {formTitle: 'Остались вопросы?', title: 'Обратная связь', type: 'euro'}
//                 })} className={styles.spanFontFamily}>Контакты</span>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad/about'}>О компании</Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/'}>авто из России</Link>
//             </NavItem>
//         </ul>
//     )
// }

export const Navigation = ({className}) => {
    const location = useLocation()
    return (
        <nav className={cn(styles.navigation, className)}>
            {/* {
                location.pathname.includes('abroad') ?
                    <NavListAbroad/>
                    :
                    <NavList/>
            } */}
            <NavList/>
        </nav>
    );
};

const NavListMobile = () => {
    const {dispatch, state} = useModalContext()
    return (
        <>
            <NavItem>
                {
                    state.discount ?
                        <Link to={'/discount#services'}>цены и Услуги</Link>
                        :
                        <Link to={'/#services'}>цены и
                            Услуги</Link>
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
                        <Link to={'/#examples'}>подобранные
                            авто</Link>
                }
            </NavItem>
            <NavItem>
                {
                    state.discount ?
                        <Link to={'/discount#feedback'}>отзывы</Link>
                        :
                        <Link
                            to={'/#feedback'}>отзывы</Link>
                }
            </NavItem>
            <NavItem>
                {
                    state.discount ?
                        <Link to={'/discount#garantier'}>гарантии</Link>
                        :
                        <Link
                            to={'/#garantier'}>гарантии</Link>
                }
            </NavItem>
            <NavItem>
                <Link to={'/blog'}>блог</Link>
            </NavItem>
            <NavItem>
                <span onClick={() => dispatch({
                    type: OPEN_MODAL,
                    payload: {formTitle: 'Заказать звонок', title: 'Обратная связь'}
                })} className={styles.spanFontFamily}>Контакты</span>
            </NavItem>
            {/* <NavItem>
                <Link to={'/abroad'}>Авто из-за рубежа</Link>
            </NavItem> */}
        </>
    )
}

// const NavListMobileAbroad = () => {
//     const {dispatch} = useModalContext()

//     return (
//         <>
//             <NavItem>
//                 <Link to={'/abroad#services'}>цены и Услуги</Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad/catalog'}>каталог</Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad#custom-clearance'}>растаможка</Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad#examples'}>подобранные авто</Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad#feedback'}>отзывы</Link>
//             </NavItem>
//             <NavItem>
//                 <span onClick={() => dispatch({
//                     type: OPEN_MODAL,
//                     payload: {formTitle: 'Заказать звонок', title: 'Обратная связь', type: 'euro'}
//                 })} className={styles.spanFontFamily}>Контакты</span>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/abroad/about'}>О компании</Link>
//             </NavItem>
//             <NavItem>
//                 <Link to={'/'}>авто из России</Link>
//             </NavItem>
//         </>
//     )
// }

export const NavigationMobile = () => {
    const location = useLocation()
    return (
        <ul className={styles.list}>
            {/* {
                location.pathname.includes('abroad') ?
                    <NavListMobileAbroad isAbroad={true}/>
                    :
                    <NavListMobile isAbroad={false}/>
            } */}
            <NavListMobile isAbroad={false}/>
        </ul>
    )
}

