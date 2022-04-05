import React from 'react';
import {Outlet, useNavigate} from 'react-router'
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {ConsultationModal} from "../../components/Modal";
import {useModalContext} from "../../contexts/ModalContext";
export const MainLayout = () => {
    return (
        <>
            {/*<Header/>*/}
            <ConsultationModal />
            <Outlet/>
            <Footer/>
        </>
    );
};

