import React from 'react';
import styles from "./Problems.module.scss";
import {ProblemCard} from "../../cards/problemCard";
import delerships from "../../../assets/images/problems/delerships.jpg"
import dtp from "../../../assets/images/problems/dtp.jpg"
import vin from "../../../assets/images/problems/vin.jpg"
import mileage from "../../../assets/images/problems/mileage.jpg"
import layer from "../../../assets/images/problems/layer.jpg"
import speed from "../../../assets/images/problems/speed.jpg"
import men from "../../../assets/images/problemsBg.jpg"
import cn from "classnames";
import ss from './long-svg.svg'
import { AnimateWrapper } from '../../animateWrapper';
import blue from './blue.jpg'
import pink from './pink.jpg'
export const Problems = () => {
    return (
      //   <div className={styles.problems}>
      // <img src={pink} className={styles.pink} alt="" />
      // <img src={blue} className={styles.blue} alt="" />

      <section className={styles.problems}>
          <div className={styles.wrapper}>
              {/* <svg
          width="391"
          height="106"
          viewBox="0 0 391 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgTop}
        >
          <path
            d="M391 14.248C238.116 -25.1472 149.202 31.5168 0 14.248V106H391V14.248Z"
            fill="black"
          />
        </svg>
        <img src={ss} alt="" className={styles.svgTop} /> */}

              <AnimateWrapper animate={"fade-top"}>
                  <h2 className={styles.title} dangerouslySetInnerHTML={{__html: localStorage.getItem('problems_title4')}}>
                  </h2>
              </AnimateWrapper>

              {/*<img src={men} alt={"men"} className={styles.men} />*/}
              <div className={styles.content}>
                  <div className={cn(styles.row, styles.first)}>
                      <AnimateWrapper animate={"fade-right"}>
                          <ProblemCard
                              src={mileage}
                              title={localStorage.getItem('problems_subtitle1')}
                              text={
                                  localStorage.getItem('problems_text1')
                              }
                              number={1}
                          />
                      </AnimateWrapper>
                      <AnimateWrapper animate={"fade-left"}>
                          <ProblemCard
                              src={layer}
                              title={localStorage.getItem('problems_subtitle2')}
                              text={
                                  localStorage.getItem('problems_text2')
                              }
                              number={2}
                          />
                      </AnimateWrapper>
                  </div>

                  <div className={cn(styles.row, styles.second)}>
                      <AnimateWrapper animate={"fade-right"}>{" "}
                          <ProblemCard
                              src={dtp}
                              title={localStorage.getItem('problems_subtitle3')}
                              text={
                                  localStorage.getItem('problems_text3')
                              }
                              number={3}
                          />
                      </AnimateWrapper>
                      <AnimateWrapper animate={"fade-left"}>{" "}
                          <ProblemCard
                              src={vin}
                              title={localStorage.getItem('problems_subtitle4')}
                              text={
                                  localStorage.getItem('problems_text4')
                              }
                              number={4}
                          />
                      </AnimateWrapper>
                  </div>
                  <div className={cn(styles.row, styles.third)}>
                      <AnimateWrapper animate={"fade-right"}>
                          <ProblemCard
                              src={delerships}
                              title={localStorage.getItem('problems_subtitle5')}
                              text={
                                  localStorage.getItem('problems_text5')
                              }
                              number={5}
                          />
                      </AnimateWrapper>
                      <AnimateWrapper animate={"fade-left"}>{" "}
                          <ProblemCard
                              src={speed}
                              title={localStorage.getItem('problems_subtitle6')}
                              text={
                                  localStorage.getItem('problems_text6')
                              }
                              number={6}
                          />
                      </AnimateWrapper>
                  </div>
              </div>
          </div>
      </section>
      //   </div>
    );
};

