import React from 'react';
import styles from './Feedback.module.scss'
import yandex from '../../../assets/images/main/yandex.png'
import vk from '../../../assets/images/main/vk.png'
import map from '../../../assets/images/main/mapOfRussia.png'
import phone from '../../../assets/images/main/phone.png'
import {useMediaQuery} from 'react-responsive';
import ReactElasticCarousel from "react-elastic-carousel";
import {Button} from "../../UI/button";
import cn from "classnames";


const PhoneSlider = () => {
    const isMobile = useMediaQuery({query: `(max-width: 980px)`})
    return (
        <>
            <ReactElasticCarousel
                itemsToShow={isMobile ? 1 : 3}
                initialActiveIndex={2}
                showArrows={false}
                enableMouseSwipe={false}
                style={{alignItems: "center"}}>

                <a href={"https://vk.com/wall-177600442?own=1"} className={styles.review}>
                    <img src={phone} alt={"phone"}/>
                </a>
                <div className={styles.phoneButton}>

                    <img src={phone} alt={"phone"}/>
                    <a href={"https://vk.com/wall-177600442?own=1"} className={cn(styles.review, styles.link)}>
                        <Button text={"смотреть все отзывы"} className={styles.btn}/>
                    </a>

                </div>
                {/*{*/}
                {/*    isMobile ?*/}
                {/*        <a href={"https://vk.com/wall-177600442?own=1"} className={styles.review}>*/}
                {/*            <img src={phone} alt={"phone"}/>*/}
                {/*        </a> :*/}
                {/*        <a href={"https://vk.com/wall-177600442?own=1"} className={styles.review}>*/}
                {/*            <img src={arm} alt={"arm"}/>*/}
                {/*        </a>*/}
                {/*}*/}
                <a href={"https://vk.com/wall-177600442?own=1"} className={styles.review}>
                    <img src={phone} alt={"phone"}/>
                </a>
            </ReactElasticCarousel>
        </>
    )
}


const SocialItem = ({src, children}) => {
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
                    Отзывы клиентов
                </h2>
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
            <div className={styles.mapWrapper}>
                <img src={map} className={styles.map} alt={"map of russia"}/>
                <PhoneSlider/>
            </div>
        </section>
    );
};

