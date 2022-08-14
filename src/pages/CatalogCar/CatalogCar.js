import React from 'react';
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";
import Main from "../../components/CatalogCar/Main/Main";

const CatalogCar = () => {
    return (
        <>
            <BreadcrumbsLayout text='Toyota Land Cruiser 300'>
                <Main />
            </BreadcrumbsLayout>
        </>
    );
};

export default CatalogCar;