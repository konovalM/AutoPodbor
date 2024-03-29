import React, {useEffect, useState} from 'react';
import styles from "./ServicesAndPrices.module.scss";
import {PriceCard} from "../../cards/priceCard";
import glasses from '../../../assets/images/services/glasses.png'
import key from '../../../assets/images/services/key.png'
import {getServices, getServicesAbroad} from "../../../api/serviceAPI";
import { AnimateWrapper } from '../../animateWrapper';

const ServicesFromApi = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        (async () => {
            await getServices().then((data)=>{ 
                const sortData = [data.at(1), data.at(2), data.at(0)]
                return setServices(sortData)})
        })()
    }, [])
    return (
      <div className={styles.content}>
        {services.map((service, index) => (
          <AnimateWrapper animate={"fade-left"} key={index}>
            <PriceCard
              component={service.icon}
              id={service.id}
              title={service.title}
              text={service.description}
              price={service.price_from}
            />
         </AnimateWrapper>
        ))}
      </div>
    );
}

const ServicesFromApiAbroad = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        (async () => {
            await getServicesAbroad().then((data)=>{ 
                const sortData = [data.at(1), data.at(2), data.at(0)]
                return setServices(sortData)})
        })()
    }, [])
    return (
        <div className={styles.content}>
            {services.map((service, index) => (
                <AnimateWrapper animate={"fade-left"} key={index}>
                    <PriceCard
                        component={service.icon}
                        id={service.id}
                        title={service.title}
                        text={service.description}
                        price={service.price_from}
                        type={service.type}
                    />
                </AnimateWrapper>
            ))}
        </div>
    );
}


export const ServicesAndPrices = () => {
    return (
      <section className={styles.servicesAndPrices} name={'#services'}>
          <img src={glasses} className={styles.glasses} alt={"glasses"} />
          <img src={key} className={styles.key} alt={"key"} />
          <div className={styles.wrapper}>

              <AnimateWrapper animate={"fade-left"}>
                  <h2 className={styles.title}>Услуги и цены</h2>
              </AnimateWrapper>
              <ServicesFromApi />
          </div>
      </section>
    );
};

export const ServicesAndPricesAbroad = () => {
    return (
        <section className={styles.servicesAndPrices} name={'#services'}>
            <img src={glasses} className={styles.glasses} alt={"glasses"} />
            <img src={key} className={styles.key} alt={"key"} />
            <div className={styles.wrapper}>

                <AnimateWrapper animate={"fade-left"}>
                    <h2 className={styles.title}>Услуги и цены</h2>
                </AnimateWrapper>
                <ServicesFromApiAbroad />
            </div>
        </section>
    );
};




