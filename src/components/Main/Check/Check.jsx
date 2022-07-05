import React from "react";
import body from "../../../assets/images/check/body.png";
import computer from "../../../assets/images/check/computer.png";
import kpp from "../../../assets/images/check/kpp.png";
import engine from "../../../assets/images/check/engine.png";
import lawyer from "../../../assets/images/check/lawyer.png";
import running from "../../../assets/images/check/running.png";
import { CheckCard } from "../../cards/checkCard";
import styles from "./Check.module.scss";
import cn from "classnames";
import carInMeddle from "../../../assets/images/check/carInMeddle.png";
import carInMiddleMobile from "../../../assets/images/carInTheCenter.png";
import { AnimateWrapper } from "../../animateWrapper";

const CheckDesktop = () => {
  return (
    <div className={styles.desktop}>
      {/*<img src={carInMeddle} alt={"carInMeddle"} className={styles.car} />*/}
      <div className={cn(styles.row, styles.first)}>
        <AnimateWrapper animate={"fade-left"}>
          <CheckCard
            src={body}
            title={localStorage.getItem('what_we_check_subtitle1')}
            text={
              localStorage.getItem('what_we_check_text1')
            }
            num='1'
          ></CheckCard>
        </AnimateWrapper>
        <AnimateWrapper animate={"fade-right"}>
          <CheckCard
            src={engine}
            title={localStorage.getItem('what_we_check_subtitle2')}
            text={
                localStorage.getItem('what_we_check_text2')
            }
            isReversed={true}
            num='2'
          />
        </AnimateWrapper>
      </div>
      <div className={cn(styles.row, styles.second)}>
        <AnimateWrapper animate={"fade-left"}>
          <CheckCard
            src={kpp}
            title={localStorage.getItem('what_we_check_subtitle3')}
            text={
                localStorage.getItem('what_we_check_text3')
            }
            num='3'
          />
        </AnimateWrapper>

        <AnimateWrapper animate={"fade-right"}>
          <CheckCard
            src={running}
            title={localStorage.getItem('what_we_check_subtitle4')}
            text={
                localStorage.getItem('what_we_check_text4')
            }
            isReversed={true}
            num='4'
          />
        </AnimateWrapper>
      </div>
      <div className={cn(styles.row, styles.third)}>
        <AnimateWrapper animate={"fade-left"}>
          <CheckCard
            src={computer}
            title={localStorage.getItem('what_we_check_subtitle5')}
            text={
                localStorage.getItem('what_we_check_text5')
            }
            num='5'
          />
        </AnimateWrapper>

        <AnimateWrapper animate={"fade-right"}>
          <CheckCard
            src={lawyer}
            title={localStorage.getItem('what_we_check_subtitle6')}
            text={
                localStorage.getItem('what_we_check_text6')
            }
            isReversed={true}
            num='6'
          />
        </AnimateWrapper>
      </div>
    </div>
  );
};

const CheckMobile = () => {
  return (
    <div className={styles.mobile}>
      <div className={styles.column}>
        <CheckCard
          src={body}
          title={localStorage.getItem('what_we_check_subtitle1')}
          text={
              localStorage.getItem('what_we_check_text1')
          }
          isReversed={false}
            num='1'
        />
        <CheckCard

          src={engine}
          title={localStorage.getItem('what_we_check_subtitle2')}
          text={
              localStorage.getItem('what_we_check_text2')
          }
          isReversed={true}
          num='2'
        />
        <CheckCard
            num='3'
          src={kpp}
          title={localStorage.getItem('what_we_check_subtitle3')}
          text={
              localStorage.getItem('what_we_check_text3')
          }
          isReversed={false}
        />
      </div>
      <div className={styles.ellipse}>
        <img
          src={carInMiddleMobile}
          alt={"carInMeddle"}
          className={styles.carMobile}
        />
      </div>
      <div className={styles.column}>
        <CheckCard
          src={running}
          title={localStorage.getItem('what_we_check_subtitle4')}
          text={
              localStorage.getItem('what_we_check_text4')
          }
          isReversed={true}
          num='4'
        />
        <CheckCard
            num={'Hello'}
            src={computer}
            title={localStorage.getItem('what_we_check_subtitle5')}
            text={
                localStorage.getItem('what_we_check_text5')
            }
            isReversed={false}
            num='5'
        />
        <CheckCard
          src={lawyer}
          title={localStorage.getItem('what_we_check_subtitle6')}
          text={
              localStorage.getItem('what_we_check_text6')
          }
          isReversed={true}
          num='6'
        />
      </div>
    </div>
  );
};

export const Check = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title} dangerouslySetInnerHTML={{__html: localStorage.getItem('what_we_check_title1')}}></h2>
      <div className={styles.content}>
        <CheckDesktop />
        <CheckMobile />
      </div>
    </div>
  );
};
