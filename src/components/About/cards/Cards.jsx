import React from 'react';
import styles from './Cards.module.scss'
import {AboutCardBig, AboutCardSmall} from "../../cards/aboutCard";
import garantier from '../../../assets/images/aboutPage/garantier.png'
import checkingDocuments from '../../../assets/images/aboutPage/checkingDocuments.jpg'
import offerUnderKEy from '../../../assets/images/aboutPage/offerUnderKEy.jpg'
import specialEquipment from '../../../assets/images/aboutPage/specialEquipment.jpg'
import moreCoin from '../../../assets/images/aboutPage/moreCoin.jpg'
import closeBase from '../../../assets/images/aboutPage/closeBatabase.png'
import cn from "classnames";
import {Button} from "../../UI/button";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";

const SmallCardsBlock = () => {
    return (
        <>
            <AboutCardSmall
                number={1}
                text={localStorage.getItem('about_text1')}
            />
            <AboutCardSmall
                number={2}
                text={localStorage.getItem('about_text2')}
            />
            <AboutCardSmall
                number={3}
                text={localStorage.getItem('about_text3')}
            />
            <AboutCardSmall
                number={4}
                text={localStorage.getItem('about_text4')}
            />
            <AboutCardSmall
                number={5}
                text={localStorage.getItem('about_text5')}
            />
            <AboutCardSmall
                number={6}
                text={localStorage.getItem('about_text6')}
            />
        </>
    )
}


const BigCardsBlock = () => {
    return (
        <>
            <AboutCardBig
                title={localStorage.getItem('about_subtitle3')}
                src={garantier}
                text={localStorage.getItem('about_sub3_text')}
            />
            <AboutCardBig
                title={localStorage.getItem('about_subtitle4')}
                src={closeBase}
                text={localStorage.getItem('about_sub4_text')}
            />
            <AboutCardBig
                title={localStorage.getItem('about_subtitle5')}
                src={specialEquipment}
                text={localStorage.getItem('about_sub5_text')}
            />
            <AboutCardBig
                title={localStorage.getItem('about_subtitle6')}
                src={checkingDocuments}
                text={localStorage.getItem('about_sub6_text')}
            />
            <AboutCardBig
                title={localStorage.getItem('about_subtitle7')}
                src={moreCoin}
                text={localStorage.getItem('about_sub7_text')}
            />
            <AboutCardBig
                title={localStorage.getItem('about_subtitle8')}
                src={offerUnderKEy}
                text={localStorage.getItem('about_sub8_text')}
            />
        </>
    )
}

const Block = ({isBig = false, title, className}) => {
    return (
        <section className={styles.wrapper}>
            <div className={cn(styles.section,className)}>
                <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title}}>
                </h2>
                <div className={styles.blocks}>
                    {
                        isBig ? <BigCardsBlock/> : <SmallCardsBlock/>
                    }
                </div>
            </div>
        </section>
    )
}


const ChooseCarCTA = () => {
    const {dispatch} = useModalContext()
    return (
        <div className={styles.cta}>
            <Button
                text={"Подобрать автомобиль"}
                className={styles.btn}
                onClick={()=>dispatch({type:OPEN_MODAL, payload: {formTitle: 'Подобрать автомобиль', title: 'Обратная связь'}})}
            />
            <p className={styles.comment} dangerouslySetInnerHTML={{__html: localStorage.getItem('about_under_button')}}>
            </p>
        </div>
    )
}



export const Cards = () => {
    return (

        <div className={styles.waves} alt={"Waves"}>
            <div className={styles.wrapperInner}>
                <Block title={localStorage.getItem('about_subtitle1')} className={styles.mt60}/>
                <Block isBig={true} title={localStorage.getItem('about_subtitle2')} className={styles.second}/>
                <ChooseCarCTA/>
            </div>
        </div>
    );
};

