import React, {useEffect, useState} from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";
import {useLocation} from "react-router";


export const Menu = () => {
    const {dispatch, state} = useModalContext()
    const location = useLocation()
    return (
        <div className={styles.fullMenu}>
            <div className={styles.col}>
                {
                    state.discount ?
                        <Link to={'/discount#services'} className={styles.link}>цены и Услуги</Link>
                        :
                        <Link to={location.pathname.includes('abroad') ? '/abroad#services' : '/#services'}
                              className={styles.link}>цены и Услуги</Link>
                }
                <Link to={location.pathname.includes('abroad') ? "/abroad/about" : "/about"} className={styles.link}>О
                    компании</Link>
                {
                    state.discount ?
                        <Link to={'/discount#examples'} className={styles.link}>подобранные авто</Link>
                        :
                        <Link to={location.pathname.includes('abroad') ? '/abroad#examples' : '/#examples'}
                              className={styles.link}>подобранные авто</Link>
                }
            </div>
            <div className={styles.col}>
                {
                    state.discount ?
                        <Link to={'/discount#feedback'} className={styles.link}>отзывы</Link>
                        :
                        <Link to={location.pathname.includes('abroad') ? '/abroad#feedback' : '/#feedback'}
                              className={styles.link}>отзывы</Link>
                }
                <Link to={location.pathname.includes('abroad') ? "/abroad/blog" : "/blog"}
                      className={styles.link}>блог</Link>
                <span className={styles.link} onClick={() => dispatch({
                    type: OPEN_MODAL,
                    payload: {
                        formTitle: 'Заказать звонок',
                        title: 'Обратная связь',
                        type: location.pathname.includes('abroad') ? 'euro' : 'local'
                    }
                })}>контакты</span>
            </div>
        </div>
    );
};




