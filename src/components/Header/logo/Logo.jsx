import React from 'react';
import logo from '../../../assets/images/Logo.svg'
import {Link} from "react-router-dom";
import styles from './Logo.module.scss'
import {useModalContext} from "../../../contexts/ModalContext";
export const Logo = () => {
    const {state} = useModalContext()
    return (
        <>
            {
                state.discount ?
                    <Link to={"/discount"} className={styles.link}>
                        <img src={logo} alt={"Logo"} className={styles.logo}/>
                        <span>Честный<br/> автоподбор</span>
                    </Link>
                    :
                    <Link to={"/"} className={styles.link}>
                        <img src={logo} alt={"Logo"} className={styles.logo}/>
                        <span>Честный<br/> автоподбор</span>
                    </Link>
            }
        </>
    );
};

