import React, {useEffect, useState} from 'react';
import {Breadcrumb} from "react-bootstrap";
import styles from './Breadcrumbs.module.scss'
import {Link} from "react-router-dom";
import {useModalContext} from "../../../contexts/ModalContext";
import {useLocation} from "react-router";
import {abroad} from "../../../router/AppRouter";


export const Breadcrumbs = ({text}) => {
    const {state} = useModalContext()
    const [isCatalogCarPage, handleIsCatalogCarPage] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if (/catalog\/\w/.test(location.pathname)){
            handleIsCatalogCarPage(true)
        }
    }, [location])
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
                {
                    isCatalogCarPage &&
                        <Breadcrumb.Item href="/" className={styles.item}>
                            <Link to={`/${abroad}/catalog`}>
                                Каталог
                            </Link>
                        </Breadcrumb.Item>
                }
                <Breadcrumb.Item active>
                    {text}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

