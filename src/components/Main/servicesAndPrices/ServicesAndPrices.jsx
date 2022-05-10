import React, {useEffect, useState} from 'react';
import styles from "./ServicesAndPrices.module.scss";
import {PriceCard} from "../../cards/priceCard";
import glasses from '../../../assets/images/services/glasses.png'
import key from '../../../assets/images/services/key.png'
import {getServices} from "../../../api/serviceAPI";
import { AnimateWrapper } from '../../animateWrapper';

const ServicesFromApi = () => {
    const [services, setServices] = useState([])
    /*const data = [
        {
            "id": 1,
            "title": "Автоподбор под ключ",
            "description": "После согласования параметров авто и бюджета подберем для вас идеальный автомобиль",
            "price_from": "20 000",
            "service_include": "<p>-&nbsp;<span style=\"white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">Согласование параметров авто и бюджета с заказчиком</span></p>",
            "icon": "http://80.78.247.91/django_media/service_icons/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_1.png"
        },
        {
            "id": 2,
            "title": "Автоподбор под ключ",
            "description": "После согласования параметров авто и бюджета подберем для вас идеальный автомобиль",
            "price_from": "20 000",
            "service_include": "<p>-&nbsp;<span style=\"white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">Согласование параметров авто и бюджета с заказчиком</span></p>",
            "icon": "http://80.78.247.91/django_media/service_icons/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_1.png"
        },
        {
            "id": 3,
            "title": "Автоподбор под ключ",
            "description": "После согласования параметров авто и бюджета подберем для вас идеальный автомобиль",
            "price_from": "20 000",
            "service_include": "<p>-&nbsp;<span style=\"white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">Согласование параметров авто и бюджета с заказчиком</span></p>",
            "icon": "http://80.78.247.91/django_media/service_icons/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_1.png"
        },
        {
            "id": 4,
            "title": "Автоподбор под ключ",
            "description": "После согласования параметров авто и бюджета подберем для вас идеальный автомобиль",
            "price_from": "20 000",
            "service_include": "<p>-&nbsp;<span style=\"white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">Согласование параметров авто и бюджета с заказчиком</span></p>",
            "icon": "http://80.78.247.91/django_media/service_icons/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_1.png"
        },
        {
            "id": 5,
            "title": "Автоподбор под ключ",
            "description": "После согласования параметров авто и бюджета подберем для вас идеальный автомобиль",
            "price_from": "20 000",
            "service_include": "<p>-&nbsp;<span style=\"white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">Согласование параметров авто и бюджета с заказчиком</span></p>",
            "icon": "http://80.78.247.91/django_media/service_icons/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_1.png"
        },
        {
            "id": 6,
            "title": "Автоподбор под ключ",
            "description": "После согласования параметров авто и бюджета подберем для вас идеальный автомобиль",
            "price_from": "20 000",
            "service_include": "<p>-&nbsp;<span style=\"white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">Согласование параметров авто и бюджета с заказчиком</span></p>",
            "icon": "http://80.78.247.91/django_media/service_icons/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_1.png"
        },
    ]
    setServices(data)*/
    useEffect(() => {
        (async () => {
            await getServices().then(setServices)
        })()
        console.log(services)
    }, [])
    return (
      <div className={styles.content}>
        {services.map((service, index) => (
          <AnimateWrapper animate={"fade-left"}>
            <PriceCard
              component={service.icon}
              id={service.id}
              key={index + 1}
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
      <section className={styles.servicesAndPrices} id={"services"}>
          <img src={glasses} className={styles.glasses} alt={"glasses"} />
          <img src={key} className={styles.key} alt={"key"} />
          <div className={styles.wrapper}>

              <AnimateWrapper animate={"fade-left"}>
                  <h2 className={styles.title}>Услуги и цены</h2>
              </AnimateWrapper>
              {/*<div className={styles.content}>*/}

              {/*Pass one of the component here StaticServices or serviceFromAPI*/}

              {/*</div>*/}
              <ServicesFromApi />
          </div>
      </section>
    );
};




