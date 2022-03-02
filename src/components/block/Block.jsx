import './Blcok.scss'
import React from 'react';
import BlockNews from "./BlockNews";

const Block = () => {
    return (
        <>
        <div className="Block">
            <div className="TitleText col-12">
                <p className="title">
                    Блог
                </p>
                <p className="titleTho">
                    Рассказываем на что обращать внимание при выборе автомобиля и как не попасть на уловки продавцов. Если у вас возникли трудности или сомнения при покупке машины, мы готовы проконсультировать вас бесплатно по телефону
                    +7 (999) 200 93 30.
                </p>
                <button>
                    Получить консультацию
                </button>
            </div>
            <div className="TitleImage">
                <img src="../images/block/Men.png"/>
            </div>
        </div>
            <div className='BlackNews'>
                <div className="bgWhite">
                    <BlockNews/>
                </div>
            </div>
            </>
    );
};

export default Block;
