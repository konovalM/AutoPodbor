import React from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router'
import {Breadcrumbs} from "../../components/UI/breadcrumbs";

export const BreadcrumbsLayout = () => {
    const loc = useLocation()


    console.log("loc: ",loc)
    return (
        <>
            <Breadcrumbs/>

            <Outlet/>
        </>
    );
};

