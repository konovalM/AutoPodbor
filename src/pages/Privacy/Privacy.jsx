import React, {useEffect} from 'react';
import {PrivacyPolicy} from "../../components/privacyPolicy";
import {useLocation, useNavigate, useParams} from "react-router";

export const Privacy = () => {
    const location = useLocation()
    const {id} = useParams()
    const nav = useNavigate()


    useEffect(()=>{

        nav(location.pathname,{ state: "Защита персональных данных" });

    },[])

    return (
        <main>
            <PrivacyPolicy/>
        </main>
    );
};

