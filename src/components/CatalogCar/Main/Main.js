import React, {useEffect, useState} from 'react';
import styles from './Main.module.css'
import {Button} from "../../UI/button";
import FormCalculator from "../../FormCalculator/FormCalculator";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";

const Main = ({car}) => {
    const {dispatch} = useModalContext()
    const [activeImg, setActiveImg] = useState(car?.image)
    useEffect(() => {
        setActiveImg(car?.image)
    }, [car])
    const [images, setImages] = useState(car?.additional_images)
    useEffect(() => {
        setImages(car?.additional_images)
    }, [car])

    const handleActive = (img, index) => {
        const clonedImages = [...images]
        clonedImages[index] = activeImg
        setActiveImg(img)
        setImages(clonedImages)
    }
    return (
        <section className={styles.section}>
            <div className="container">
                <h6 className={styles.carName}>
                    {car?.title}
                </h6>
                <div className={styles.card}>
                    <div className={styles.imgWrapper}>
                        <img src={activeImg} alt="img" className={styles.img}/>
                        {
                            !!images?.length
                            &&
                            <div className={styles.additional}>
                                {
                                    images.map((item, index) => {
                                        return (
                                            <img src={item} key={index} alt="" className={styles.thumbnail} onClick={() => handleActive(item, index)}/>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className={styles.aboutMain}>
                        <h5 className={styles.price}>Стоимость: {car?.price} &#8364;</h5>
                        <p className={styles.year}>{car?.manufacture_year} год выпуска</p>
                    </div>
                    <div className={styles.about}>

                        <p className={styles.content}>
                            <p dangerouslySetInnerHTML={{__html: car?.description}}></p>
                        </p>
                    </div>
                </div>
                <Button text='Заказать автомобиль' className={styles.btnOrder} onClick={() => dispatch({type: OPEN_MODAL, payload: {title: car.title, formTitle: 'Заказать автомобиль', type: 'euro'}})}/>
            </div>
        </section>
    );
};

export default Main;
