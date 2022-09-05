import React from "react";
import styles from "./Promo.module.scss";
import pig from "../../../assets/images/main/pig.png";
import docs from "../../../assets/images/main/docs.png";
import box from "../../../assets/images/main/box.png";
import search from "../../../assets/images/main/search.png";
import money from "../../../assets/images/main/money.jpg";
import button from "../../../assets/images/ui/button.png";
import mainBgAbroad from '../../../assets/images/mainBgAbroad.jpg'
import cn from "classnames";
import {
    OPEN_MODAL,
    useModalContext,
} from "../../../contexts/ModalContext";
import {AnimateButton} from "../../UI/animateButton/AnimateButton";


const Plus = ({src, title, text}) => {
    return (
        <div className={styles.plus}>
            <img src={src} alt={"plus"}/>
            <div>
                {
                    localStorage.getItem('promo_subheader_1') ?
                        <h3 className={cn(styles.title, styles.titleLeft)}
                            dangerouslySetInnerHTML={{__html: title}}></h3>
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

const PlusesAbroad = () => {
    return (
        <div className={styles.pluses}>
            <Plus
                src={pig}
                title={localStorage.getItem('euro_first_page_subheader_1')}
                text={localStorage.getItem('euro_first_page_subdescription_1')}
            />
            <Plus
                src={docs}
                title={localStorage.getItem('euro_first_page_subheader_2')}
                text={localStorage.getItem('euro_first_page_subdescription_2')}
            />
            <Plus
                src={search}
                title={localStorage.getItem('euro_first_page_subheader_3')}
                text={localStorage.getItem('euro_first_page_subdescription_3')}
            />
        </div>
    );
};

const MainTitle = () => {
    const {dispatch, state} = useModalContext();
    return (
        <div
            className={localStorage.getItem('isLoggedOut') ? cn(styles.mainTitleBlock, styles.mainTitleBlock2) : styles.mainTitleBlock}>
            {
                state.discount
                    ?
                    localStorage.getItem('promo_header2')
                        ? <h1 className={styles.mainTitle}
                              dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_header2')}}
                        ></h1>
                        : ''
                    :
                    localStorage.getItem('promo_header')
                        ? <h1 className={styles.mainTitle}
                              dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_header')}}
                        ></h1>
                        : ''
            }
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
                onClick={() => dispatch({
                    type: OPEN_MODAL,
                    payload: {title: 'Обратная связь', formTitle: 'Оставить заявку'}
                })}
            >
                <div className={styles.btnWrapper}>
                    <div className={styles.btnInner}>
                        Оставить заявку
                    </div>
                </div>
            </button>
        </div>
    );
};

const MainTitleAbroad = () => {
    const {dispatch, state} = useModalContext();
    return (
        <div
            className={localStorage.getItem('isLoggedOut') ? cn(styles.mainTitleBlock, styles.mainTitleBlock2) : styles.mainTitleBlock}>
            {
                localStorage.getItem('euro_first_page_header')
                    ? <h1 className={styles.mainTitle}
                          dangerouslySetInnerHTML={{__html: localStorage.getItem('euro_first_page_header')}}
                    ></h1>
                    : ''
            }
            {localStorage.getItem('promo_description') ? <p className={cn(styles.title, styles.mb32, styles.mw406)}
                                                            dangerouslySetInnerHTML={{__html: localStorage.getItem('euro_first_page_description')}}></p>
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
                onClick={() => dispatch({
                    type: OPEN_MODAL,
                    payload: {title: 'Обратная связь', formTitle: 'Оставить заявку', type: 'euro'}
                })}
            >
                <div className={styles.btnWrapper}>
                    <div className={styles.btnInner}>
                        Оставить заявку
                    </div>
                </div>
            </button>
            <AnimateButton text={'варианты в наличии'} isLight={true}/>
        </div>
    );
};

export const Promo = () => {
    return (
        <section className={styles.main}>
            <div style={{position: "relative"}}>
                <div className={styles.wrapper}>
                    <div className={styles.plusesDesktop}>
                        <Pluses/>
                    </div>
                    <MainTitle/>
                </div>
            </div>
            <div className={styles.plusesMobile}>
                <Pluses/>
            </div>
        </section>
    );
};

export const PromoAbroad = () => {
    return (
        <section className={cn(styles.main, styles.mainAbroad)}>
            <div style={{position: "relative"}}>
                <div className={styles.wrapper}>
                    <div className={styles.plusesDesktop}>
                        <PlusesAbroad/>
                    </div>
                    <MainTitleAbroad/>
                </div>
            </div>
            <div className={styles.plusesMobile}>
                <PlusesAbroad/>
            </div>
        </section>
    );
};
