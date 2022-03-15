import React from 'react';
import {Logo} from "./logo";
import styles from './Footer.module.scss'
import {Call} from "../Header/call";
import {Address} from "../Header/address";
import {Menu} from "./menu";
import {Waiting} from "./waiting";
export const Footer = () => {
    return (
        <footer className={styles.black}>
            <div className={styles.footer}>
            <Logo/>
            <Address isBlack={false}/>
            <Call isBlack={false}/>
            <Menu/>
            <Waiting/>
            </div>
        </footer>
    );
};

