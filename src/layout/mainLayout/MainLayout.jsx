import React from 'react';
import {Outlet} from 'react-router'
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {ConsultationModal} from "../../components/Modal";
export const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <ConsultationModal />
            <Outlet/>
            <Footer/>
        </>
    );
};

