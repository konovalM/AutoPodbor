import React, {useState} from 'react';
import styles from './CatalogCards.module.css'
import {Button} from "../../UI/button";
import imgMock from '../../../assets/images/catalog/catalogItemMock.jpg'
import keys from '../../../assets/images/catalog/keys.png'
import {useNavigate} from "react-router";
import cn from "classnames";
import {CLEAR_FILTER, SET_FILTER, useFilterContext} from "../../../contexts/FilterContext";
import {abroad} from "../../../router/AppRouter";

const CatalogCards = ({cars, filterButtons}) => {
    const {dispatch} = useFilterContext()
    const [activeButtonId, setActiveButtonId] = useState(null)

    const setButton = (id, min_price, max_price) => {
        if (id === activeButtonId) {
            setActiveButtonId(null)
            dispatch({type: CLEAR_FILTER})
        } else {
            setActiveButtonId(id)
            dispatch({type: SET_FILTER, payload: {min_price, max_price}})
        }

    }
    return (<section className={styles.wave}>
        <img src={keys} alt="keys" className={styles.keys}/>
        <div className={styles.background}>
            <div className="container">
                <div className={styles.btnWrapper}>
                    {filterButtons && filterButtons.map((btn) => (
                            <Button text={btn.description}
                                    className={btn.id === activeButtonId ? cn(styles.btn, styles.btnActive) : styles.btn}
                                    key={btn.id}
                                    onClick={() => setButton(btn.id, btn.min_price, btn.max_price)}/>
                        )
                    )}
                </div>
                {!!cars?.length && <Cards cars={cars}/>}
            </div>
        </div>
    </section>);
};

export const Cards = ({cars}) => {
    const nav = useNavigate()
    return (<div className={styles.catalogGrid}>
        {cars.map((car, index) => (<div className={styles.gridItem} key={index}>
            <a href="https://t.me/chestniy_autopodbor">
                <Button text='Подробнее' className={styles.moreBtn}
                />
            </a>
            <img src={car.image} alt="mock" className={styles.catalogItemImg}/>
            <div className={styles.description}>
                <h5 className={styles.name}>{car.title}</h5>
                <p className={styles.year}>{car.manufacture_year} год выпуска</p>
                <p className={styles.price}>Цена от: {car.price} eur</p>
            </div>
        </div>))}
    </div>)
}

export default CatalogCards;
