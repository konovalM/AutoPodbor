import React, {useEffect, useRef, useState} from 'react';
import {Routes, Route} from 'react-router'
import {MainLayout} from "../layout/mainLayout";
import {Main} from "../pages/Main";
import {Service} from "../pages/Service";
import {About} from "../pages/About";
import {NotFound} from "../pages/404";
import {Blog} from "../pages/Blog";
import {Privacy} from "../pages/Privacy";
import {Article} from "../pages/Article/Article";
import AOS from "aos";

export const AppRouter = () => {
    const [data, setData] = useState()
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
        await fetch('https://avtopodbor-spb.pro/api/info/')
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
    }, [])
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Main />}/>
                <Route path="/service/:id" element={<Service/>}/>
                <Route path="/article/:id" element={<Article/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="*" element={<NotFound to={"not-found"}/>}/>
            </Route>
        </Routes>
    );
};


