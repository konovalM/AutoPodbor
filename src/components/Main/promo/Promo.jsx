import React, {useEffect, useState} from "react";
import styles from "./Promo.module.scss";
import bcg from "../../../assets/images/mainBcg.jpg";
import pig from "../../../assets/images/main/pig.png";
import box from "../../../assets/images/main/box.png";
import search from "../../../assets/images/main/search.png";
import money from "../../../assets/images/main/money.jpg";
import people from "../../../assets/images/main/people.png";
import cloud from "../../../assets/images/clouds/cloud.png";
import cloud1 from "../../../assets/images/clouds/cloud1.png";
import cloud2 from "../../../assets/images/clouds/cloud2.png";
import cloud3 from "../../../assets/images/clouds/cloud3.png";
import cloud4 from "../../../assets/images/clouds/cloud4.png";
import button from "../../../assets/images/ui/button.png";
import clouds from "./clouds.png";
import cn from "classnames";
import {
  CHANGE_SHOW_MODAL,
  OPEN_MODAL,
  useModalContext,
} from "../../../contexts/ModalContext";
import {getService} from "../../../api/serviceAPI";
import {getInfo} from "../../../api/infoAPI";
import {useNavigate} from "react-router";

const Plus = ({ src, title, text }) => {
  return (
    <div className={styles.plus}>
      <img src={src} alt={"plus"} />
      <div>
          {
              localStorage.getItem('promo_subheader_1') ?
                  <h3 className={cn(styles.title, styles.titleLeft)} dangerouslySetInnerHTML={{__html: title}}></h3>
                  :
                  ''
          }
          {
              localStorage.getItem('promo_subdescription_1') ?
                  <p className={styles.text} dangerouslySetInnerHTML={{__html: text}}></p>
                  :
                  ''
          }

      </div>
    </div>
  );
};

const Pluses = () => {
  return (
    <div className={styles.pluses}>
      <Plus
        src={pig}
        title={localStorage.getItem('promo_subheader_1')}
        text={localStorage.getItem('promo_subdescription_1')}
      />
      <Plus
        src={box}
        title={localStorage.getItem('promo_subheader_2')}
        text={localStorage.getItem('promo_subdescription_2')}
      />
      <Plus
        src={search}
        title={localStorage.getItem('promo_subheader_3')}
        text={localStorage.getItem('promo_subdescription_3')}
      />
    </div>
  );
};

const MainTitle = () => {
  const { dispatch } = useModalContext();
  return (
    <div className={styles.mainTitleBlock}>
        {localStorage.getItem('promo_header') ? <h1 className={styles.mainTitle} dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_header')}}></h1> : ''}
        {localStorage.getItem('promo_description') ? <p className={cn(styles.title, styles.mb32, styles.mw406)}
                          dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_description')}}></p>
        :
        ''}

      <div className={styles.moneyBlock}>
        <img src={money} alt={"money"} className={styles.money}/>
          {
              localStorage.getItem('promo_subdescription') ?
                  <p dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_subdescription')}}></p>
                  :
                  ''
          }
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: OPEN_MODAL })}
      >
        {/*<img src={button} alt={"Button"} />*/}
          <div className={styles.btnWrapper}>
              <div className={styles.btnInner}>
                  Оставить заявку
              </div>
          </div>
      </button>
    </div>
  );
};

const Cloud = () => {
  return (
    <div className={styles.cloud}>
      <img src={cloud} alt={"cloud"} />
      <img src={cloud1} alt={"cloud"} />
      <img src={cloud2} alt={"cloud"} />
      <img src={cloud3} alt={"cloud"} />
      <img src={cloud4} alt={"cloud"} />
    </div>
  );
};

export const Promo = ({data}) => {
  return (
    <section className={styles.main}>
      <div style={{ position: "relative" }}>
        {/*<img src={bcg} alt={"main"} className={styles.bcgImage} height={650} />*/}
        <div className={styles.wrapper}>
          <div className={styles.plusesDesktop}>
            <Pluses />
          </div>
          <MainTitle />
          {/*<img src={people} className={styles.people} alt={"people"} />*/}
        </div>
        {/*<img src={clouds} className={styles.clouds} alt="" />*/}
        {/* <Cloud /> */}
      </div>
      <div className={styles.plusesMobile}>
        <Pluses />
      </div>
    </section>
  );
};
