import React, {useEffect, useState} from 'react';
import {Routes, Route, useLocation} from 'react-router'
import {MainLayout} from "../layout/mainLayout";
import {Main} from "../pages/Main";
import {Service} from "../pages/Service";
import {About} from "../pages/About";
import {NotFound} from "../pages/404";
import {Blog} from "../pages/Blog";
import {Privacy} from "../pages/Privacy";
import {Article} from "../pages/Article/Article";
import AOS from "aos";
import {deleteSpan} from "../functions/deleteSpan";
import {useBeforeunload} from "react-beforeunload";
import {scrollToElement} from "../utils/ScrollToElement";
import {DISCOUNT, useModalContext} from "../contexts/ModalContext";

export const AppRouter = () => {
    const [data, setData] = useState()
    const location = useLocation()
    const {dispatch} = useModalContext()
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: "linear",
            delay: 100,
            once: false,
            disable: ["tablet",'mobile'],
            anchorPlacement: "top-top",
            mirror: false,
        });
    }, [])
    useEffect(async () => {
        await fetch('https://chestniy-autopodbor.ru/api/info/')
            .then(res => {
                return res.json()
            })
            .then(res => {
                res.forEach((obj) => {
                    if (obj.image){
                        localStorage.setItem(obj.slug, obj.image)
                    } else {
                        localStorage.setItem(obj.slug, obj.value)
                    }
                })
                setData(res)
            })
            .then(() => {
                deleteSpan(localStorage.getItem('promo_telephone'))
            })
    }, [])
    useEffect(() => {
        console.log(location)
        if (location.hash){
            setTimeout(() => {
                scrollToElement(location.hash)
            }, 500)
        }
        if (location.pathname === '/discount'){
            dispatch({type: DISCOUNT})
        }
    }, [location.key])

    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/discount" element={<Main />}/>
                <Route path="/service/:id" element={<Service/>}/>
                <Route path="/article/:id" element={<Article/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="*" element={<NotFound to={"not-found"}/>}/>
            </Routes>
        </MainLayout>
    );
};


