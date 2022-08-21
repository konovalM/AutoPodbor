import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {AutoPodbor} from "../../../components/AutoPodbor/AutoPodbor";
import {FormBlock} from "../../../components/FormBlock";
import {getService} from "../../../api/serviceAPI";
import {BreadcrumbsLayout} from "../../../layout/breadcrumbsLayout";
import styles from './Service.module.scss'


export const Service = () => {
    const {id} = useParams()
    const nav = useNavigate()


    const [serviceData, setServiceData] = useState()

    useEffect(() => {
        (async () => {
            await getService(id).then(setServiceData).catch(() => {
                nav("/not-found");
            })
        })()
    }, [id])
    return (
        <BreadcrumbsLayout text={serviceData?.title || ""}>
            <main style={{overflow: 'hidden'}}>
                {serviceData && <AutoPodbor service={serviceData}/>}
                <div className={styles.wave}>
                    <div style={{backgroundColor: '#000'}}>
                        <FormBlock/>
                    </div>
                </div>
            </main>
        </BreadcrumbsLayout>
    );
};

