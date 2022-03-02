import './Blcok.scss';
import React from 'react';

const BlockNews = () => {
    return (
        <div className="container">
            <div className="BlockNews">
                <div>
                    <img src="../images/block/ImgNews.png"/>
                    <p className="title">
                        Заголовок статьи длинный
                    </p>
                    <p className="titleTho">
                        Необходимо будет выполнять такие-то задачи. Необходимо будет выполнять такие-то задачи.Необходимо будет выполнять такие-то задачи. Необходимо будет выполнять такие-то задачи подробнее...
                    </p>
                </div>
                <div className="row">
                    <div className="col-6 date">
                        10.02.2022
                    </div>
                    <div className="col-6">
                    <button>
                        Читать
                    </button>
                </div>
                </div>
            </div>
            </div>
    );
};

export default BlockNews;
