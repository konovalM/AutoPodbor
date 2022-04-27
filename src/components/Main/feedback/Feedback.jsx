import React from "react";
import styles from "./Feedback.module.scss";
import yandex from "../../../assets/images/main/yandex.png";
import vk from "../../../assets/images/main/vk.png";
import map from "../../../assets/images/main/mapOfRussia.png";
import phone from "../../../assets/images/main/phone.png";
import { Button } from "../../UI/button";
import cn from "classnames";
import { ExternalLink } from "../../UI/externalLink";
import { AnimateWrapper } from "../../animateWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prev from "./prev.svg";
const PhoneSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    className: styles.sliderSlick,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "20px",
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider
        {...settings}
        nextArrow={
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="22.5"
              cy="22.5"
              r="22.5"
              fill="url(#paint0_linear_306_1622)"
            />
            <path
              d="M26.6212 21.938L20.1458 15.5244C19.9336 15.3144 19.5901 15.3148 19.3783 15.5255C19.1667 15.7362 19.1672 16.0776 19.3794 16.2877L25.4694 22.3196L19.3792 28.3514C19.167 28.5616 19.1665 28.9028 19.3781 29.1135C19.4843 29.2192 19.6234 29.272 19.7625 29.272C19.9012 29.272 20.0398 29.2195 20.1457 29.1146L26.6212 22.7012C26.7234 22.6002 26.7808 22.4628 26.7808 22.3196C26.7808 22.1764 26.7233 22.0392 26.6212 21.938Z"
              fill="#121212"
            />
            <defs>
              <linearGradient
                id="paint0_linear_306_1622"
                x1="22.5"
                y1="0"
                x2="22.5"
                y2="45"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FCC026" />
                <stop offset="1" stop-color="#FC8B26" />
              </linearGradient>
            </defs>
          </svg>
        }
        prevArrow={
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="22.5"
              transform="matrix(-1 0 0 1 22.5 22.5)"
              fill="url(#paint0_linear_306_1634)"
            />
            <path
              d="M18.3788 21.938L24.8542 15.5244C25.0664 15.3144 25.4099 15.3148 25.6217 15.5255C25.8333 15.7362 25.8328 16.0776 25.6206 16.2877L19.5306 22.3196L25.6208 28.3514C25.833 28.5616 25.8335 28.9028 25.6219 29.1135C25.5157 29.2192 25.3766 29.272 25.2375 29.272C25.0988 29.272 24.9602 29.2195 24.8543 29.1146L18.3788 22.7012C18.2766 22.6002 18.2193 22.4628 18.2193 22.3196C18.2193 22.1764 18.2768 22.0392 18.3788 21.938Z"
              fill="#121212"
            />
            <defs>
              <linearGradient
                id="paint0_linear_306_1634"
                x1="22.5"
                y1="0"
                x2="22.5"
                y2="45"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FCC026" />
                <stop offset="1" stop-color="#FC8B26" />
              </linearGradient>
            </defs>
          </svg>
        }
      >
        <ExternalLink
          href={"https://vk.com/wall-177600442?own=1"}
          className={cn(styles.review, styles.link)}
        >
          <div className="globalPhone">
            {" "}
            <div className={styles.phoneButton}>
              <img src={phone} alt={"phone"} />

              {/* <Button text={"смотреть все отзывы"} className={styles.btn} /> */}
            </div>
          </div>
        </ExternalLink>
        <ExternalLink
          href={"https://vk.com/wall-177600442?own=1"}
          className={cn(styles.review, styles.link)}
        >
          <div className="globalPhone">
            {" "}
            <div className={styles.phoneButton}>
              <img src={phone} alt={"phone"} />

              {/* <Button text={"смотреть все отзывы"} className={styles.btn} /> */}
            </div>
          </div>
        </ExternalLink>
        <ExternalLink
          href={"https://vk.com/wall-177600442?own=1"}
          className={cn(styles.review, styles.link)}
        >
          <div className="globalPhone">
            {" "}
            <div className={styles.phoneButton}>
              <img src={phone} alt={"phone"} />

              {/* <Button text={"смотреть все отзывы"} className={styles.btn} /> */}
            </div>
          </div>
        </ExternalLink>
        <ExternalLink
          href={"https://vk.com/wall-177600442?own=1"}
          className={cn(styles.review, styles.link)}
        >
          <div className="globalPhone">
            {" "}
            <div className={styles.phoneButton}>
              <img src={phone} alt={"phone"} />

              {/* <Button text={"смотреть все отзывы"} className={styles.btn} /> */}
            </div>
          </div>
        </ExternalLink>
        <ExternalLink
          href={"https://vk.com/wall-177600442?own=1"}
          className={cn(styles.review, styles.link)}
        >
          <div className="globalPhone">
            {" "}
            <div className={styles.phoneButton}>
              <img src={phone} alt={"phone"} />

              {/* <Button text={"смотреть все отзывы"} className={styles.btn} /> */}
            </div>
          </div>
        </ExternalLink>

      </Slider>
    </div>
  );
};

const SocialItem = ({ src, children }) => {
  return (
    <>
      <div className={styles.socialItem}>
        <img src={src} alt={"reviews"} />
        <p className={styles.text}>{children}</p>
      </div>
    </>
  );
};

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
