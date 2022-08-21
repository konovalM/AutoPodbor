import React, {useState} from 'react';
import styles from './CatalogCards.module.css'
import {Button} from "../../UI/button";
import imgMock from '../../../assets/images/catalog/catalogItemMock.jpg'
import keys from '../../../assets/images/catalog/keys.png'
import {useNavigate} from "react-router";
import cn from "classnames";
import {SET_FILTER, useFilterContext} from "../../../contexts/FilterContext";
import {abroad} from "../../../router/AppRouter";

const CatalogCards = ({cars}) => {
    const {dispatch} = useFilterContext()
    const [buttons, setButtons] = useState([
        {
            text: 'от 1,2 до 1,3 млн. руб.',
            isActive: false,
        },
        {
            text: 'от 1,3 до 2 млн. руб.',
            isActive: false,
        },
        {
            text: 'от 2 млн. руб. и дороже.',
            isActive: false,
        },
    ])

    const setActiveButton = (index) => {
        setButtons(
            buttons.map((btn, i) => {
                if (index === i) {
                    dispatch({type: SET_FILTER, payload: (btn.isActive ? null : index)})
                    return {...btn, isActive: !btn.isActive}
                }
                return {...btn, isActive: false}
            })
        )
    }
    return (
        <section className={styles.wave}>
            <img src={keys} alt="keys" className={styles.keys}/>
            <div className={styles.background}>
                <div className="container">
                    <div className={styles.btnWrapper}>
                        {
                            buttons.map((btn, index) => (
                                <Button onClick={() => setActiveButton(index)} text={btn.text} className={btn.isActive ? cn(styles.btn, styles.btnActive) : styles.btn} key={index}/>
                            ))
                        }
                    </div>
                    {
                        !!cars?.length &&
                        <Cards cars={cars}/>
                    }
                </div>
            </div>
        </section>
    );
};

export const Cards = ({cars}) => {
    const nav = useNavigate()
    return (
        <div className={styles.catalogGrid}>
            {
                cars.map((car, index) => (
                    <div className={styles.gridItem} key={index}>
                        <Button text='Подробнее' className={styles.moreBtn}
                                onClick={() => nav(`/${abroad}/catalog/${car.id}`)}/>
                        <img src={car.image} alt="mock" className={styles.catalogItemImg}/>
                        <div className={styles.description}>
                            <h5 className={styles.name}>{car.title}</h5>
                            <p className={styles.year}>{car.manufacture_year} год выпуска</p>
                            <p className={styles.price}>Цена: {car.price} руб.</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CatalogCards;