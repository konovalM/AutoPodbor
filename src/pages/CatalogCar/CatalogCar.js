import React, {useEffect, useState} from 'react';
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";
import Main from "../../components/CatalogCar/Main/Main";
import CatalogCarBlack from "../../components/CatalogCar/CatalogCarBlack/CatalogCarBlack";
import {useNavigate, useParams} from "react-router";
import {getCatalogItem} from "../../api/catalogAPI";

const CatalogCar = () => {
    const {id} = useParams()
    const nav = useNavigate()
    const [car, setCar] = useState()
    console.log(car)
    useEffect(() => {
        (async () => {
            await getCatalogItem(id).then(setCar).catch(() => {
                nav("/not-found");
            })
        })()
    }, [id])
    return (
        <>
            <BreadcrumbsLayout text={car?.title}>
                <Main car={car}/>
                <CatalogCarBlack />
            </BreadcrumbsLayout>
        </>
    );
};

export default CatalogCar;