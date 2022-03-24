import React from 'react';
import {Breadcrumb} from "react-bootstrap";
import {useLocation} from "react-router";
import styles from './Breadcrumbs.module.scss'


export const Breadcrumbs = () => {
    const location = useLocation()

    return (
        <div className={styles.container}>
            <Breadcrumb >
                <Breadcrumb.Item href="/" className={styles.item}>Главная страница</Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {location.state}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

