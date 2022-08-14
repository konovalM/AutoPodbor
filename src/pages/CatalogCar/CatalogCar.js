import React from 'react';
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";
import Main from "../../components/CatalogCar/Main/Main";
import CatalogCarBlack from "../../components/CatalogCar/CatalogCarBlack/CatalogCarBlack";

const CatalogCar = () => {
    return (
        <>
            <BreadcrumbsLayout text='Toyota Land Cruiser 300'>
                <Main />
                <CatalogCarBlack />
            </BreadcrumbsLayout>
        </>
    );
};

export default CatalogCar;