import React from 'react';
import {ShadowCard} from "../shadowCard";
import {ReactComponent as Car} from '../../../assets/images/services/car.svg'
import styles from './PriceCard.module.scss'
import {Button} from "../../UI/button";
import {useModalContext} from "../../../contexts/ModalContext";

const CircleIcon = ({component}) => {
    return (
        <div className={styles.circleOut}>
            <div className={styles.circleIn}>
                <div className={styles.img}>
                    {component}
                </div>
            </div>
        </div>
    )
}


const Price = ({price}) => {
    return (
        <div className={styles.price}>
            от <span className={styles.priceNumber}>{price}</span> ₽
        </div>
    )
}


export const PriceCard = ({price, title, component, text}) => {
    const {setShow} = useModalContext()
    return (
        <ShadowCard className={styles.mb56}>
            <div className={styles.card}>
                <CircleIcon component={component}/>


                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.text}>{text}</p>
                    <Price price={price}/>
                    <Button className={styles.button} text={"Оставить заявку"} onClick={()=>{setShow(true)}}/>
                    <span className={styles.more}>Подробнее</span>
                </div>
            </div>
        </ShadowCard>
    );
};



