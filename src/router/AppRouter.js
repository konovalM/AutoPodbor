import React from 'react';
import {Routes,Route} from 'react-router'
import Article from "../components/article/Article";
import PrivacyPolicy from "../components/privacyPolicy/PrivacyPolicy";
import Error from "../components/404/Error";
import AutoSelection from "../components/autoSelection/autoSelection";
import Block from "../components/block/Block";
import {MainLayout} from "../layout";
import {Main} from "../pages/Main";

export const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Main/>} />
                    <Route path="/article" element={<Article/>} />
                    <Route path="/ps" element={<PrivacyPolicy />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/as" element={<AutoSelection />} />
                    <Route path="/block" element={<Block />} />
                </Route>
            </Routes>
    );
};


