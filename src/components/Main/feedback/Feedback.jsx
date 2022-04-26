import React from 'react';
import styles from './Feedback.module.scss'
import yandex from '../../../assets/images/main/yandex.png'
import vk from '../../../assets/images/main/vk.png'
import map from '../../../assets/images/main/mapOfRussia.png'
import phone from '../../../assets/images/main/phone.png'
import {Button} from "../../UI/button";
import cn from "classnames";
import {ExternalLink} from "../../UI/externalLink";
import { AnimateWrapper } from '../../animateWrapper';


const PhoneSlider = () => {
    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.phoneButton}>

                <img src={phone} alt={"phone"}/>
                <ExternalLink href={"https://vk.com/wall-177600442?own=1"} className={cn(styles.review, styles.link)}>
                    <Button text={"смотреть все отзывы"} className={styles.btn}/>
                </ExternalLink>

            </div>
        </div>
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
      <section className={styles.bck} id={"feedback"}>
        <div className={styles.container}>
          <AnimateWrapper animate={"fade-right"}>
            <h2 className={styles.title}>Отзывы клиентов</h2>
          </AnimateWrapper>

          <div className={styles.social}>
            <AnimateWrapper animate={"fade-left"}>
              <SocialItem src={yandex}>
                Более 45 отзывов на{" "}
                <ExternalLink
                  href={"https://yandex.ru/profile/185334738407"}
                  className={styles.underline}
                >
                  &nbsp;Яндекс
                </ExternalLink>
                &nbsp;со средней оценкой 5.0
              </SocialItem>
            </AnimateWrapper>

            <AnimateWrapper animate={"fade-right"}>
              {" "}
              <SocialItem src={vk}>
                Более 1200 положительных отзывов в группе{" "}
                <ExternalLink
                  href={"https://vk.com/wall-177600442?own=1"}
                  className={styles.underline}
                >
                  &nbsp;ВКонтакте
                </ExternalLink>
              </SocialItem>
            </AnimateWrapper>
          </div>
        </div>
        <div className={styles.mapWrapper}>
          <img src={map} className={styles.map} alt={"map of russia"} />
          <PhoneSlider />
        </div>
      </section>
    );
};

