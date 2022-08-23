import React, {useState} from 'react';
import {Outlet, useLocation} from 'react-router'
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

