import React from 'react';
import "./autoSelection.scss"
const AutoSelection = () => {
    return (
        <div className="AutoSelection">
            <p className="title">
                Автоподбор
            </p>
            <p className="titleTho">
                Стоимость: 20 000 ₽
            </p>
            <p className="titleThree">
                Цена услуги фиксированная и не меняется в процессе работы. Общая стоимость работ может измениться только в случае заказа дополнительных услуг.
            </p>
            <div className="mapCar">
                <img className="BMap" src="../images/autoSelection/BMap.svg"/>
                <img className="map" src="../images/autoSelection/map.svg"/>
            </div>
            <div className="checkList">
                <img className="car" src="../images/autoSelection/car.png"/>
                <p className="titleCheck">
                    Входит в услугу
                </p>
                <ul>
                    <li>Согласование параметров авто и бюджета с заказчиком</li>
                    <li>Оформление Договора на подбор автомобиля</li>
                    <li>Анализ рынка предложений</li>
                    <li>Анализ рынка предложений</li>
                </ul>
                <button>
                    Заказать услугу
                </button>
            </div>
        </div>
    );
};

export default AutoSelection;
