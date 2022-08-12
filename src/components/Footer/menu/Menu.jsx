import React, {useEffect, useState} from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";


export const Menu = () => {
    const {dispatch, state} = useModalContext()
    return (
        <div className={styles.fullMenu}>
            <div className={styles.col}>
                {
                    state.discount ?
                        <Link to={'/discount#services'} className={styles.link}>цены и Услуги</Link>
                        :
                        <Link to={'/#services'} className={styles.link}>цены и Услуги</Link>
                }
                <Link to={"/about"} className={styles.link}>О компании</Link>
                {
                    state.discount ?
                        <Link to={'/discount#examples'} className={styles.link}>подобранные авто</Link>
                        :
                        <Link to={'/#examples'} className={styles.link}>подобранные авто</Link>
                }
            </div>
            <div className={styles.col}>
                {
                    state.discount ?
                        <Link to={'/discount#feedback'} className={styles.link}>отзывы</Link>
                        :
                        <Link to={'/#feedback'} className={styles.link}>отзывы</Link>
                }
                <Link to={"/blog"} className={styles.link}>блог</Link>
                <span className={styles.link} onClick={()=>dispatch({type:OPEN_MODAL})}>контакты</span>
            </div>
        </div>
    );
};




