import React, {useEffect, useState} from 'react';
import {useLocation, useMatch, useInRouterContext, useOutlet, useNavigate, useParams} from "react-router";
import {AutoPodbor} from "../../components/AutoPodbor/AutoPodbor";
import {FormBlock} from "../../components/FormBlock";
import blackServiceRec from "../../assets/images/waves/blackServiceRec.png";
import styles from "../../components/Main/Check/Check.module.scss";
import {BlackWrapper} from "../../components/blackWrapper";
import {getBlogPosts} from "../../api/blogAPI";
import {getService} from "../../api/serviceAPI";
import {WaveWrapper} from "../../components/wavesWrapper";


export const Service = () => {
    const location = useLocation()
    const {id} = useParams()
    const nav = useNavigate()



    const [serviceData,setServiceData] = useState()

    useEffect(() => {
        (async () => {
            await getService(id).then(res=>{
                nav(location.pathname, {state: res.title});
                setServiceData(res)
            }).catch(() => {
                nav("/not-found");
            })
        })()
    }, [id])

    return (
        <main>
            {serviceData && <AutoPodbor service={serviceData}/>}
            <WaveWrapper src={blackServiceRec} alt={"blackServiceRec"}>
                <FormBlock/>
            </WaveWrapper>
        </main>
    );
};

