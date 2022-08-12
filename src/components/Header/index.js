import React, {useEffect, useRef, useState} from 'react';
import styles from './Header.module.scss'
import {Logo} from "./logo";
import {Address} from "./address";
import {Wait} from "./wait";
import {Call} from "./call";
import {Social} from "./social";
import {Navigation} from "./navigation";
import cn from "classnames";
import logo from '../../assets/images/Logo.svg'
import {NavigationMobile} from "./navigation/Navigation";
import {ReactComponent as Close} from "../../assets/images/close.svg";
import {ReactComponent as Burger} from "../../assets/images/burger.svg";
import {useLocation, useNavigate} from "react-router";
import {OPEN_MODAL, useModalContext} from "../../contexts/ModalContext";

const HeaderDesktop = () => {
    return (
        <>
            <header className={cn(styles.headerContent, styles.headerDesktop)}>
                <div className={styles.gray}>
                    <div className={styles.topBar}>
                        <div className={styles.row}>
                            <Logo/>
                            <Address isBlack={true}/>
                            <Wait/>
                        </div>

                        <div className={styles.row}>
                            <Call isBlack={true}/>
                            <Social/>
                        </div>
                    </div>
                </div>
                <Navigation className={styles.menu}/>
            </header>
        </>
    )
}


const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const {current} = useRef(document.querySelector("#root"));
    useEffect(() => {
        isOpen? current.style.position = "fixed": current.style.position = "static"
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const {dispatch} = useModalContext()
    const nav = useNavigate()
    return (
        <>
            <div className={styles.headerOutside}>
                <header className={styles.headerMobile}>
                    <div className={styles.container}>
                        <div className={styles.head}>
                            <img className={styles.img} src={logo} alt={"logo"} onClick={()=>nav('/')}/>
                            <div className={styles.textContainer}>
                                <a href={`tel:${localStorage.getItem('tel')}`} className={styles.text} dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_telephone')}}>
                                </a>
                                <span className={styles.link} onClick={() => dispatch({type: OPEN_MODAL})}>
                                заказать звонок
                            </span>
                            </div>
                            <button className={styles.btn} onClick={() => setIsOpen(prevState => !prevState)}>
                                {isOpen ? <Close/> : <Burger/>}
                            </button>

                        </div>

                    </div>
                </header>
                <div className={cn(styles.headerWrapper, {
                    [styles.animate]: isOpen
                })}>
                    <div className={cn(styles.menuTransition)}>
                        <div className={styles.addressWait}>
                            <Address isBlack={true}/>
                            <Wait/>
                        </div>
                        <nav className={styles.nav}>
                            <NavigationMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
                        </nav>
                        <Social/>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Header = () => {
    return (
        <>
            <HeaderDesktop/>
            <HeaderMobile/>
        </>
    );
};

