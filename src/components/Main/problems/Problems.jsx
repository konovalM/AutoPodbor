import React from 'react';
import styles from "./Problems.module.scss";
import {ProblemCard} from "../../cards/problemCard";
import delerships from "../../../assets/images/problems/delerships.jpg"
import dtp from "../../../assets/images/problems/dtp.jpg"
import vin from "../../../assets/images/problems/vin.jpg"
import mileage from "../../../assets/images/problems/mileage.jpg"
import layer from "../../../assets/images/problems/layer.jpg"
import speed from "../../../assets/images/problems/speed.jpg"
import swift from "../../../assets/images/problems/abroad/swift.jpg"
import checking from "../../../assets/images/problems/abroad/checking.jpg"
import lawyer from "../../../assets/images/problems/abroad/lawyer.jpg"
import cn from "classnames";
import { AnimateWrapper } from '../../animateWrapper';

export const Problems = () => {
    return (
      <section className={styles.problems}>
          <div className={styles.wrapper}>
              <AnimateWrapper animate={"fade-top"}>
                  <h2 className={styles.title} dangerouslySetInnerHTML={{__html: localStorage.getItem('problems_title4')}}>
                  </h2>
              </AnimateWrapper>

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
    );
};

export const ProblemsAbroad = () => {
    return (
        <section className={styles.problems}>
            <div className={styles.wrapper}>
                <AnimateWrapper animate={"fade-top"}>
                    <h2 className={styles.title} dangerouslySetInnerHTML={{__html: localStorage.getItem('problems_title4')}}>
                    </h2>
                </AnimateWrapper>

                <div className={styles.content}>
                    <div className={cn(styles.row, styles.first)}>
                        <AnimateWrapper animate={"fade-right"}>
                            <ProblemCard
                                src={swift}
                                title={localStorage.getItem('euro_title4_subtitle1')}
                                text={
                                    localStorage.getItem('euro_title4_text1')
                                }
                                number={1}
                            />
                        </AnimateWrapper>
                        <AnimateWrapper animate={"fade-left"}>
                            <ProblemCard
                                src={layer}
                                title={localStorage.getItem('euro_title4_subtitle2')}
                                text={
                                    localStorage.getItem('euro_title4_text2')
                                }
                                number={2}
                            />
                        </AnimateWrapper>
                    </div>

                    <div className={cn(styles.row, styles.second)}>
                        <AnimateWrapper animate={"fade-right"}>{" "}
                            <ProblemCard
                                src={dtp}
                                title={localStorage.getItem('euro_title4_subtitle3')}
                                text={
                                    localStorage.getItem('euro_title4_text3')
                                }
                                number={3}
                            />
                        </AnimateWrapper>
                        <AnimateWrapper animate={"fade-left"}>{" "}
                            <ProblemCard
                                src={checking}
                                title={localStorage.getItem('euro_title4_subtitle4')}
                                text={
                                    localStorage.getItem('euro_title4_text4')
                                }
                                number={4}
                            />
                        </AnimateWrapper>
                    </div>
                    <div className={cn(styles.row, styles.third)}>
                        <AnimateWrapper animate={"fade-right"}>
                            <ProblemCard
                                src={lawyer}
                                title={localStorage.getItem('euro_title4_subtitle5')}
                                text={
                                    localStorage.getItem('euro_title4_text5')
                                }
                                number={5}
                            />
                        </AnimateWrapper>
                        <AnimateWrapper animate={"fade-left"}>{" "}
                            <ProblemCard
                                src={speed}
                                title={localStorage.getItem('euro_title4_subtitle6')}
                                text={
                                    localStorage.getItem('euro_title4_text6')
                                }
                                number={6}
                            />
                        </AnimateWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
};

