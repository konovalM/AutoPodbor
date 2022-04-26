import React, {useEffect, useState} from 'react';
import styles from "./ServicesAndPrices.module.scss";
import {PriceCard} from "../../cards/priceCard";
import glasses from '../../../assets/images/services/glasses.png'
import key from '../../../assets/images/services/key.png'
import {getServices} from "../../../api/serviceAPI";
import { AnimateWrapper } from '../../animateWrapper';

const ServicesFromApi = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        (async () => {
            await getServices().then(setServices)
        })()
    }, [])
    return (
      <div className={styles.content}>
        {services.map((service, index) => (
          <AnimateWrapper animate={"fade-left"}>
            <PriceCard
              component={service.icon}
              id={service.id}
              key={index}
              title={service.title}
              text={service.description}
              price={service.price_from}
            />
         </AnimateWrapper>
        ))}
      </div>
    );
}


export const ServicesAndPrices = () => {
    return (
      <section className={styles.wrapper} id={"services"}>
        <div className={styles.blue} />
        <div className={styles.pink} />
        <img src={glasses} className={styles.glasses} alt={"glasses"} />
        <img src={key} className={styles.key} alt={"key"} />
        <AnimateWrapper animate={"fade-left"}>
          <h2 className={styles.title}>Услуги и цены</h2>
        </AnimateWrapper>

        {/*<div className={styles.content}>*/}

        {/*Pass one of the component here StaticServices or serviceFromAPI*/}

        {/*</div>*/}
        <ServicesFromApi />
      </section>
    );
};




