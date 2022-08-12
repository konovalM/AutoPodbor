import React from 'react';
import {Breadcrumb} from "react-bootstrap";
import styles from './Breadcrumbs.module.scss'
import {Link} from "react-router-dom";
import {useModalContext} from "../../../contexts/ModalContext";


export const Breadcrumbs = ({text}) => {
    const {state} = useModalContext()
    return (
        <div className={styles.container}>
            <Breadcrumb>
                <Breadcrumb.Item href="/" className={styles.item}>
                    {
                        state.discount ?
                            <Link to='/discount'>
                                Главная страница
                            </Link>
                            :
                            <Link to='/'>
                                Главная страница
                            </Link>
                    }
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {text}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

