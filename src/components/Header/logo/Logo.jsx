import React from 'react';
import logo from '../../../assets/images/Logo.svg'
import {Link} from "react-router-dom";
import styles from './Logo.module.scss'
import {useModalContext} from "../../../contexts/ModalContext";
import {useLocation} from "react-router";

export const Logo = () => {
    const {state} = useModalContext()
    const location = useLocation()
    return (
        <>
            {
                state.discount ?
                    <Link to={"/discount"} className={styles.link}>
                        <img src={logo} alt={"Logo"} className={styles.logo}/>
                        <span>Честный<br/> автоподбор</span>
                    </Link>
                    :
                    <Link to={location.pathname.includes('abroad') ? '/abroad' : '/'} className={styles.link}>
                        <img src={logo} alt={"Logo"} className={styles.logo}/>
                        <span>Честный<br/> автоподбор</span>
                    </Link>
            }
        </>
    );
};

