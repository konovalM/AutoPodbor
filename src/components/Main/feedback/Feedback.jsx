import React, {useState} from 'react';
import styles from './Feedback.module.scss'
import yandex from '../../../assets/images/main/yandex.png'
import vk from '../../../assets/images/main/vk.png'
import {ReactComponent as Prev} from "../../../assets/images/breadcrumbs/prev.svg"
import {ReactComponent as Next} from "../../../assets/images/breadcrumbs/next.svg"
import arm from '../../../assets/images/main/arm.png'
import phone from '../../../assets/images/main/phone.png'

import ReactElasticCarousel from "react-elastic-carousel";


const PhoneSlider = () => {
    return (
        <>
            <ReactElasticCarousel itemsToShow={3} initialActiveIndex={2} style={{alignItems:"center"}}>
                <img src={phone} alt={"phone"}/>
                <img src={arm} alt={"arm"}/>
                <img src={phone} alt={"phone"}/>
            </ReactElasticCarousel>
        </>
    )
}



const SocialItem = ({src,children}) => {
    return (
        <>
            <div className={styles.socialItem}>
                <img src={src} alt={'reviews'}/>
                <p className={styles.text}>
                    {
                        children
                    }
                </p>
            </div>
        </>
    )
}

export const Feedback = () => {


    return (
        <section className={styles.bck}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Я не знаю как сделать слайдер, на макете тупо рука с телефоном                </h2>
                <div className={styles.social}>
                    <SocialItem src={yandex}>
                        Более 45 отзывов на <span className={styles.underline}>Яндекс</span><br/>
                        со средней оценкой 5.0

                    </SocialItem>
                    <SocialItem src={vk}>
                        Более 1200 положительных<br/>
                        отзывов в группе <span className={styles.underline}>ВКонтакте</span>

                    </SocialItem>
                </div>
            </div>
            <PhoneSlider/>
        </section>
    );
};

