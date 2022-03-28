import React from 'react';
import {Logo} from "./logo";
import styles from './Footer.module.scss'
import {Call} from "../Header/call";
import {Address} from "../Header/address";
import {Menu} from "./menu";
import {Waiting} from "./waiting";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className={styles.black}>

            <div className={styles.container}>
                <div className={styles.footer}>
                    <Logo/>
                    <Menu/>
                    <div className={styles.addressCall}>
                        <Address isBlack={false}/>
                        <Call isBlack={false}/>
                    </div>
                    <Waiting/>
                </div>
                <div className={styles.policyblock}>
                    <p className={styles.policy}>
                        Политика конфиденциальности
                    </p>
                    <Link to={"https://ozzostudio.ru/"} className={styles.companylink}> Сайт сделан ozzostudio.ru</Link>
                </div>
            </div>
        </footer>
    );
};

