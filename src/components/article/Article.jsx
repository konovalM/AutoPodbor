import React from 'react';
import "./article.scss"
import BlockNews from "../block/BlockNews";
const Article = () => {
    return (
        <div className="Article">
            <img className="car" src="../images/article/car.png"/>
            <div className="container">
            <div className="Block">
                <div className="TitleText col-12">
                    <p className="title">
                        Блог
                    </p>
                    <p className="date">
                        6 февраля 2022
                    </p>
                    <p className="titleTho">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
                        <p><img src="../images/block/imgNews.png"/></p><br/>
                    </p>
                </div>
                <img className="firTree" src="../images/article/fir-tree.png"/>
            </div>

            </div>
            <div className='BlackNews'>
                <div className="bgWhite">
                    <BlockNews/>
                </div>
            </div>
        </div>
    );
};

export default Article;
