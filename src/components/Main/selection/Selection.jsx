import React from 'react';
import styles from './Selection.module.scss'
import {StagesOfSelectionCard} from "../../cards/stagesOfSelectionCard";
import first from '../../../assets/images/stagesOfSelection/1.png'
import second from '../../../assets/images/stagesOfSelection/2.png'
import third from '../../../assets/images/stagesOfSelection/3.png'
import fourth from '../../../assets/images/stagesOfSelection/4.png'
import fifth from '../../../assets/images/stagesOfSelection/5.png'
import fifthAbroad from '../../../assets/images/stagesOfSelection/abroad/5.png'
import sixth from '../../../assets/images/stagesOfSelection/6.png'

import {AnimateWrapper} from '../../animateWrapper';

export const Selection = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <AnimateWrapper animate={"fade-left"}>
                    <h2 className={styles.title}
                        dangerouslySetInnerHTML={{__html: localStorage.getItem('stages_of_car_selection_title7')}}></h2>
                </AnimateWrapper>
                <AnimateWrapper animate={"fade-right"}>
                    <div className={styles.cardContainer}>
                        <StagesOfSelectionCard
                            src={first}
                            title={localStorage.getItem('stages_of_car_selection_subtitle1')}
                        >
                            {localStorage.getItem('stages_of_car_selection_text1')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard
                            src={second}
                            title={localStorage.getItem('stages_of_car_selection_subtitle2')}
                        >
                            {localStorage.getItem('stages_of_car_selection_text2')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard src={third}
                                               title={localStorage.getItem('stages_of_car_selection_subtitle3')}>
                            {localStorage.getItem('stages_of_car_selection_text3')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard
                            src={fourth}
                            title={localStorage.getItem('stages_of_car_selection_subtitle4')}
                        >
                            {localStorage.getItem('stages_of_car_selection_text4')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard
                            src={fifth}
                            title={localStorage.getItem('stages_of_car_selection_subtitle5')}
                        >
                            {localStorage.getItem('stages_of_car_selection_text5')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard
                            src={sixth}
                            title={localStorage.getItem('stages_of_car_selection_subtitle6')}
                        >
                            {localStorage.getItem('stages_of_car_selection_text6')}
                        </StagesOfSelectionCard>
                    </div>
                </AnimateWrapper>
            </div>
        </section>
    );
};

export const SelectionAbroad = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <AnimateWrapper animate={"fade-left"}>
                    <h2 className={styles.title}
                        dangerouslySetInnerHTML={{__html: localStorage.getItem('stages_of_car_selection_title7')}}></h2>
                </AnimateWrapper>
                <AnimateWrapper animate={"fade-right"}>
                    <div className={styles.cardContainer}>
                        <StagesOfSelectionCard
                            src={first}
                            title={localStorage.getItem('euro_stages_of_car_selection_subtitle1')}
                        >
                            {localStorage.getItem('euro_stages_of_car_selection_text1')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard
                            src={second}
                            title={localStorage.getItem('euro_stages_of_car_selection_subtitle2')}
                        >
                            {localStorage.getItem('euro_stages_of_car_selection_text2')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard src={third}
                                               title={localStorage.getItem('euro_stages_of_car_selection_subtitle3')}>
                            {localStorage.getItem('euro_stages_of_car_selection_text3')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard
                            src={fourth}
                            title={localStorage.getItem('euro_stages_of_car_selection_subtitle4')}
                        >
                            {localStorage.getItem('euro_stages_of_car_selection_text4')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard
                            src={fifthAbroad}
                            title={localStorage.getItem('euro_stages_of_car_selection_subtitle5')}
                        >
                            {localStorage.getItem('euro_stages_of_car_selection_text5')}
                        </StagesOfSelectionCard>
                        <StagesOfSelectionCard
                            src={sixth}
                            title={localStorage.getItem('euro_stages_of_car_selection_subtitle6')}
                        >
                            {localStorage.getItem('euro_stages_of_car_selection_text6')}
                        </StagesOfSelectionCard>
                    </div>
                </AnimateWrapper>
            </div>
        </section>
    );
};
