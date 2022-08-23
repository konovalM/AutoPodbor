import React, {useEffect, useState} from 'react';
import {Routes, Route, useLocation} from 'react-router'
import {MainLayout} from "../layout/mainLayout";
import {Main} from "../pages/rus/Main";
import {Service} from "../pages/rus/Service";
import {About} from "../pages/other/About";
import {NotFound} from "../pages/other/404";
import {Blog} from "../pages/rus/Blog";
import {Privacy} from "../pages/other/Privacy";
import {Article} from "../pages/rus/Article/Article";
import AOS from "aos";
import {deleteSpan} from "../functions/deleteSpan";
import {useBeforeunload} from "react-beforeunload";
import {scrollToElement} from "../utils/ScrollToElement";
import {DISCOUNT, useModalContext} from "../contexts/ModalContext";
import Catalog from "../pages/euro/Catalog/Catalog";
import CatalogCar from "../pages/euro/CatalogCar/CatalogCar";
import {MainAbroad} from "../pages/euro/MainAbroad/MainAbroad";

export const abroad = 'abroad'

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
                <Route path="/service/:id" element={<Service/>}/>
                <Route path="/article/:id" element={<Article/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path={`/${abroad}`} element={<MainAbroad />} />
                <Route path={`/${abroad}/catalog`} element={<Catalog />}/>
                <Route path={`/${abroad}/about`} element={<About />}/>
                <Route path={`/${abroad}/blog`} element={<Blog />}/>
                <Route path={`/${abroad}/privacy`} element={<Privacy />}/>
                <Route path={`/${abroad}/catalog/:id`} element={<CatalogCar />}/>
                <Route path={`/${abroad}/service/:id`} element={<Service/>}/>

                <Route path="*" element={<NotFound to={"not-found"}/>}/>
            </Routes>
        </MainLayout>
    );
};


