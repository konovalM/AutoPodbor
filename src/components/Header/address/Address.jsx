import React from 'react';
import styles from "./Addres.module.scss";
import map from "../../../assets/images/mapAddress.svg";
import cn from "classnames";
import {Link} from "react-router-dom";
import {useModalContext} from "../../../contexts/ModalContext";
import {useLocation} from "react-router";

export const Address = ({isBlack}) => {
    const {state} = useModalContext()
    const location = useLocation()
    return (
        <>
            {
                state.discount ?
                    <Link to="/discount#footer" className={cn(styles.text, isBlack ? styles.black : styles.white
                    )}>
                        <img src={map} alt={"Map"}/>
                        <span className={styles.spanText}>Наши офисы в Москве и Санкт-Петербурге
                     </span>
                    </Link>
                    :
                    <Link to={location.pathname.includes('abroad') ? "/abroad#footer" : "/#footer"} className={cn(styles.text, isBlack ? styles.black : styles.white
                    )}>
                        <img src={map} alt={"Map"}/>
                        <span className={styles.spanText}>Наши офисы в Москве и Санкт-Петербурге
                     </span>
                    </Link>
            }
        </>

    );
};

