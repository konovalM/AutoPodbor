import React from 'react';
import styles from './Choice.module.scss'
import {WhyCard} from "../../cards/whyCard";
import cars from '../../../assets/images/choice/Cars.png'
import bank from '../../../assets/images/choice/bank.png'
import wallet from '../../../assets/images/choice/wallet.png'
import raiting from '../../../assets/images/choice/raiting.png'
import packageImg from '../../../assets/images/choice/package.png'
import clock from '../../../assets/images/choice/clock.png'
import { AnimateWrapper } from '../../animateWrapper';

export const Choice = () => {
    return (
        <section className={styles.choice}>
            <div className={styles.wrapper}>
                <AnimateWrapper animate={"fade-left"}>
                    {
                        <h2 className={styles.title} dangerouslySetInnerHTML={{__html: localStorage.getItem('euro_title2_title2')}}></h2>
                        ||
                        null
                    }

                </AnimateWrapper>
                <div className={styles.content}>
                    <AnimateWrapper animate={"fade-right"}>
                        <WhyCard
                            src={cars}
                            title={localStorage.getItem('euro_title2_subtitle1')}
                            text={
                                localStorage.getItem('euro_title2_text1')
                            }
                        />
                    </AnimateWrapper>
                    <AnimateWrapper animate={"fade-right"}>
                        <WhyCard
                            src={wallet}
                            title={localStorage.getItem('euro_title2_subtitle2')}
                            text={
                                localStorage.getItem('euro_title2_text2')
                            }
                        />
                    </AnimateWrapper>
                    <AnimateWrapper animate={"fade-right"}>
                        {" "}
                        <WhyCard
                            src={bank}
                            title={localStorage.getItem('euro_title2_subtitle3')}
                            text={
                                localStorage.getItem('euro_title2_text3')
                            }
                        />
                    </AnimateWrapper>

                    <AnimateWrapper animate={"fade-left"}>
                        {" "}
                        <WhyCard
                            src={clock}
                            title={localStorage.getItem('euro_title2_subtitle4')}
                            text={
                                localStorage.getItem('euro_title2_text4')
                            }
                        />
                    </AnimateWrapper>
                    <AnimateWrapper animate={"fade-left"}>
                        {" "}
                        <WhyCard
                            src={packageImg}
                            title={localStorage.getItem('euro_title2_subtitle5')}
                            text={
                                localStorage.getItem('euro_title2_text5')
                            }
                        />
                    </AnimateWrapper>
                    <AnimateWrapper animate={"fade-left"}>
                        {" "}
                        <WhyCard
                            src={raiting}
                            title={localStorage.getItem('euro_title2_subtitle6')}
                            text={
                                localStorage.getItem('euro_title2_text6')
                            }
                        />
                    </AnimateWrapper>
                </div>
            </div>
        </section>
    );
};

