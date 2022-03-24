import React from 'react';
import styles from './Header.module.scss'
import {Logo} from "./logo";
import {Address} from "./address";
import {Wait} from "./wait";
import {Call} from "./call";
import {Social} from "./social";
import {Navigation} from "./navigation";
import cn from "classnames";
import logo from '../../assets/images/Logo.png'
import {Link} from "react-router-dom";
import {NavigationMobile} from "./navigation/Navigation";
import button from '../../assets/images/main/button.png'
export const Header = () => {
    return (
        <>
            <header className={cn(styles.headerContent,styles.headerDesktop)}>
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
            <header className={styles.headerMobile}>
                <div className={styles.container}>

                    <div className={styles.head}>
                        <div className={styles.logo}>
                            <img className={styles.img} src={logo} alt={"logo"}/>
                            <div className={styles.textContainer}>
                                <p className={styles.text}>
                                    +7 (999) 200-93-30
                                </p>
                                <a className={styles.link}>
                                    заказать звонок
                                </a>
                            </div>
                        </div>
                        <button>
                            x
                        </button>
                    </div>
                    <Address isBlack={true}/>
                    <Wait/>
                    <nav>
                       <NavigationMobile/>
                    </nav>
                </div>
            </header>

        </>
    );
};

