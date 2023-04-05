import React from 'react';
import {Questions} from "../../../components/Main/Questions";
import {Choice} from "../../../components/Main/choice";
import {ServicesAndPrices} from "../../../components/Main/servicesAndPrices";
import {Problems} from "../../../components/Main/problems";
import {Check} from "../../../components/Main/Check";
import {Examples} from "../../../components/Main/Examples";
import {Maps} from "../../../components/Main/Map";
import {Promo} from "../../../components/Main/promo";
import {Selection} from "../../../components/Main/selection";
import {Feedback} from "../../../components/Main/feedback";
import styles from "../../../components/Main/Check/Check.module.scss";
import style from './Main.module.scss'
import {RoadToCenter} from "../../../components/Main/RoadToCenter";
import garantier from '../../../assets/images/garant/garan.png'
import {Garantier} from "../../../components/Main/garantier";
import {FormBlock} from "../../../components/FormBlock";
import white from "../../../assets/images/waves/whiteMainRec.png";
import './questions.scss'
import {WaveWrapper} from "../../../components/wavesWrapper";

import {AnimateWrapper} from "../../../components/animateWrapper";

export const Main = () => {


    return (
      <main>
        <Promo/>

        <Choice />

        <ServicesAndPrices />

        <Problems />

        <section className={styles.black} >

          <Check />

          <AnimateWrapper animate={"fade-left"}>
            <FormBlock style={{ padding: "100px 0" }} />
          </AnimateWrapper>
          <AnimateWrapper animate={"fade-right"}>
            <Examples />
          </AnimateWrapper>
            <Feedback />
          <WaveWrapper src={white} alt={"white background"}>
              <Selection />
          </WaveWrapper>

          <div className={style.back}  name={"#garantier"}>
            <img src={garantier} alt={"Гарант"} className={style.garantier} />
            <AnimateWrapper animate={"fade-right"}>
              <Garantier />
            </AnimateWrapper>
          </div>
          <div className={style.questionWrapper}>
               <div className='questionInner'>
                   <AnimateWrapper animate={"fade-left"}>
                       <Questions />
                   </AnimateWrapper>
                   <RoadToCenter />
               </div>
          </div>
        </section>
        <Maps />
      </main>
    );
};

