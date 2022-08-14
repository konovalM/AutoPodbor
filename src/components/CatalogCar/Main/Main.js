import React, {useEffect, useState} from 'react';
import styles from './Main.module.css'
import {Button} from "../../UI/button";
import {getWorkExamples} from "../../../api/workExamplesApi";

const Main = () => {
    const [activeImg, setActiveImg] = useState(null)
    const [images, setImages] = useState(null)
    useEffect(()=>{
        (async ()=>{
            const data = await getWorkExamples(1)
            setActiveImg(data.results[0].img)
            // setSmallImgs(data.results[0].additional_images)
            console.log(data.results[0].additional_images)
            setImages(data.results[0].additional_images)

        })()
    },[])

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
                    Toyota Land Cruiser 300
                </h6>
                <div className={styles.card}>
                    <div className={styles.imgWrapper}>
                        <img src={activeImg} alt="img" className={styles.img}/>
                            {
                                images
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
                        <h5 className={styles.price}>Стоимость: 2 000 000 ₽ </h5>
                        <p className={styles.year}>2003 год выпуска</p>
                    </div>
                    <div className={styles.about}>

                        <p className={styles.content}>
                            <p>- Автомобиль в хорошем техническом и внешнем состоянии</p>
                            <p>- По кузову присутствуют несколько вторичных окрасов (до 300 мкр), был небольшой ремонт задних арок (до 500 мкр).</p>
                            <p>- В работе ДВС посторонние звуки отсутствуют</p>
                            <p>- В работе ДВС посторонние звуки отсутствуют</p>
                            <p>- АКПП переключает без рывков и пинков</p>
                            <p>- Тест-драйв и подвеска без замечаний</p>
                            <p>- Салон в прекрасном состоянии, чистый, не затертый</p>
                            <p>- Комплектация INVITE+</p>
                            <p>- Рекомендовано пройти плановое ТО на 250 000 км с заменой всех жидкостей, поменять датчик кислорода.</p>
                        </p>
                    </div>
                </div>
                <Button text='Заказать автомобиль' className={styles.btnOrder}/>
            </div>
        </section>
    );
};

export default Main;