import React from 'react';
import styles from "./ServicesAndPrices.module.scss";
import {PriceCard} from "../../cards/priceCard";
import {ReactComponent as Car} from '../../../assets/images/services/car.svg'
import {ReactComponent as Coin} from '../../../assets/images/services/coin.svg'
import {ReactComponent as Garage} from '../../../assets/images/services/garage.svg'
import {ReactComponent as NewCar} from '../../../assets/images/services/newCar.svg'
import {ReactComponent as Person} from '../../../assets/images/services/person.svg'
import {ReactComponent as Key1} from '../../../assets/images/services/key1.svg'
import {ReactComponent as Key2} from '../../../assets/images/services/key2.svg'
import glasses from '../../../assets/images/services/glasses.png'
import key from '../../../assets/images/services/key.png'


const Keys = () => {
    return (
        <div className={styles.keys}>
            <Key1/>
            <Key2/>
        </div>
    )
}
export const ServicesAndPrices = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.blue}/>
            <div className={styles.pink}/>
            <img src={glasses} className={styles.glasses} alt={"glasses"}/>
            <img src={key} className={styles.key} alt={"key"}/>
            <h2 className={styles.title}>Услуги и цены</h2>
            <div className={styles.content}>
                <PriceCard
                    component={<Car/>}
                    title={"Автоподбор под ключ"}
                    text={"После согласования параметров авто и бюджета подберем для вас идеальный автомобиль"}
                    price={"20 000"}
                />
                <PriceCard
                    component={<Keys/>}
                    title={"Выездная диагностика"}
                    text={"Выезд специалиста на место осмотра с оценкой общего состояния автомобиля"}
                    price={"4 000"}
                />
                <PriceCard
                    component={<Garage/>}
                    title={"Эндоскоп, подъемники, осмотр на СТО"}
                    text={"Также мы предоставляем дополнительные услуги, которые помогут вам ни о чем не волноваться"}
                    price={"500"}
                />
                <PriceCard
                    component={<NewCar/>}
                    title={"Подбор нового автомобиля"}
                    text={"Описать почему мы можем лучше, чем самостоятельно ездить по автосалонам"}
                    price={"XXX"}
                />
                <PriceCard
                    component={<Coin/>}
                    title={"Продажа вашего автомобиля"}
                    text={"Вы можете продолжать использовать свой автомобиль в обычном режиме, пока мы его продаем"}
                    price={"15 000"}
                />
                <PriceCard
                    component={<Person/>}
                    title={"Специалист на день"}
                    text={"Наш специалист сопровождает вас в течение всего дня и выполняет требующиеся работы"}
                    price={"9 000"}
                />
            </div>
        </section>
    );
};

