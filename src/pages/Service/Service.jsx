import React, {useEffect} from 'react';
import {useLocation, useMatch, useInRouterContext, useOutlet, useNavigate, useParams} from "react-router";
import {AutoPodbor} from "../../components/AutoPodbor/AutoPodbor";


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
            </main>
        );
    };

