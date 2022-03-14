import React from 'react';
import styles from './Header.module.scss'
import {Logo} from "./logo";
import {Address} from "./address";
import {Wait} from "./wait";
import {Call} from "./call";
import {Social} from "./social";
import {Navigation} from "./navigation";


export const Header = () => {
    return (
        <header className={styles.headerContent}>
            <div className={styles.gray}>
                <div className={styles.topBar}>
                    <Logo/>
                    <Address isBlack={true}/>
                    <Wait/>
                    <Call isBlack={true}/>
                    <Social/>
                </div>
            </div>
            <Navigation className={styles.menu}/>
        </header>
    );
};

