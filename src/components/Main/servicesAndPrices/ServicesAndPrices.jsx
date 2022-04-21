import React, {useEffect, useState} from 'react';
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
import {getServices} from "../../../api/serviceAPI";


const Keys = () => {
    return (
        <div className={styles.keys}>
            <Key1/>
            <Key2/>
        </div>
    )
}

const ImagesCard = {
    сar:<Car/>,
    keys:<Keys/>,
    garage:<Garage/>,
    newCar:<NewCar/>,
    coin:<Coin/>,
    person:<Person/>
}


const ServicesFromApi = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        (async () => {
            await getServices().then(setServices)
        })()
    }, [])

    return (
        <div className={styles.content}>
            {services.map((service, index) =>
                <PriceCard
                    component={service?.image && ImagesCard[service.image]}
                    id={service.id}
                    key={index}
                    title={service.title}
                    text={service.description}
                    price={service.price_from}
                />)}

        </div>
    )
}


export const ServicesAndPrices = () => {
    return (
        <section className={styles.wrapper} id={"services"}>
            <div className={styles.blue}/>
            <div className={styles.pink}/>
            <img src={glasses} className={styles.glasses} alt={"glasses"}/>
            <img src={key} className={styles.key} alt={"key"}/>
            <h2 className={styles.title}>Услуги и цены</h2>
            {/*<div className={styles.content}>*/}



            {/*Pass one of the component here StaticServices or serviceFromAPI*/}


            {/*</div>*/}
            <ServicesFromApi/>
        </section>
    );
};




