import React from 'react';
import styles from './Call.module.scss'
import call from '../../../assets/images/phone.svg'
import cn from "classnames";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";
import {useLocation} from "react-router";

export const Call = ({isBlack}) => {
    const location = useLocation()
    const {dispatch} = useModalContext()
    return (
        <div className={styles.content}>
            <div className={styles.imgContainer}>
                <img src={call} alt={"Call"}/>
            </div>
            <div className={styles.textContent}>
                <a href={`tel:${localStorage.getItem('tel')}`}
                   className={cn(styles.numberFooter, styles.title, isBlack ? styles.black : styles.white
                   )} onClick={() => window.yaCounter88846653.reachGoal('phone')}
                   dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_telephone')}}></a>
                <span className={styles.orderNumber} onClick={() => dispatch({
                    type: OPEN_MODAL,
                    payload: {
                        formTitle: 'Заказать звонок',
                        title: 'Обратная связь',
                        type: location.pathname.includes('abroad') ? 'euro' : 'local'
                    }
                })}>Заказать звонок</span>
            </div>
        </div>
    );
};

