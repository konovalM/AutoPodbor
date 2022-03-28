import React, {useEffect} from 'react';
import {useLocation, useMatch, useInRouterContext, useOutlet, useNavigate, useParams} from "react-router";
import {AutoPodbor} from "../../components/AutoPodbor/AutoPodbor";
import {FormBlock} from "../../components/FormBlock";
import smallBcgRectangle from "../../assets/images/smallBcgRectangle.png";
import styles from "../../components/Main/Check/Check.module.scss";


export const Service = () => {
    const location = useLocation()
    const {id} = useParams()
    const nav = useNavigate()


    useEffect(() => {

        nav(location.pathname, {state: "название услуги"});
    }, [])
    return (
        <main>
            <AutoPodbor/>
            <div style={{position:"relative"}}>
                <img src={smallBcgRectangle} alt={"Black background"} className={styles.img}/>
                <FormBlock/>
            </div>
        </main>
    );
};

