import React from 'react';
import Header from "../components/Header";
import Article from "../components/article/Article";
import Footer from "../components/Footer";
import {Route, Routes} from "react-router-dom";
import PrivacyPolicy from "../components/privacyPolicy/PrivacyPolicy";
import Error from "../components/404/Error";
import AutoSelection from "../components/autoSelection/autoSelection";
import Block from "../components/block/Block";
import Main from "../components/Main/Main";

const AppRouter = () => {
    return (
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/article" element={<Article/>} />
                    <Route path="/ps" element={<PrivacyPolicy />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/as" element={<AutoSelection />} />
                    <Route path="/block" element={<Block />} />
                </Routes>
                <Footer/>
                 </div>
    );
};

export default AppRouter;
