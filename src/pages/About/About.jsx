import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router";
import {MainAbout} from "../../components/About/mainAbout";
import {Cards} from "../../components/About/cards";

export const About = () => {
    const location = useLocation()
    const nav = useNavigate()


    useEffect(()=>{

        nav(location.pathname,{ state: "О компании" });
    },[])
    return (
        <main>
            <MainAbout/>
            <Cards/>
        </main>
    );
};

