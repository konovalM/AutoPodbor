import React from 'react';
import car from '../../../assets/images/example/car.png'
import styles from './ExampleCard.module.scss'

export const ExampleBig = () => {
    return (
        <div className={styles.card}>
            <img src={car} className={styles.img}/>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div>
                        <h3 className={styles.title}>Toyota Land Cruiser 300</h3>
                        <h4 className={styles.subtitle}>2003 год выпуска</h4>
                    </div>
                    <div>
                        <p className={styles.prices}>Цена продавца: 1 900 000 руб.</p>
                        <p className={styles.prices}>После торга: 1 700 000 руб.</p>
                    </div>
                </div>
                <div>
        <p className={styles.text}><span className={styles.textBold}>Задача: </span>Найти автомобиль с заданными параметрами, подходящий потенциальному покупателю. Найти автомобиль с заданными параметрами, подходящий потенциальному покупателю. </p>
                    <p className={styles.text}>


                        <span className={styles.textBold}>Результат:</span><br/>
                        - Автомобиль в хорошем техническом и внешнем состоянии<br/>
                        - По кузову присутствуют несколько вторичных окрасов (до 300 мкр), был небольшой ремонт задних арок (до 500 мкр).<br/>
                        - В работе ДВС посторонние звуки отсутствуют<br/>
                        - АКПП переключает без рывков и пинков<br/>
                        - Тест-драйв и подвеска без замечаний<br/>
                        - Салон в прекрасном состоянии, чистый, не затертый<br/>
                        - Комплектация INVITE+<br/>
                        - Рекомендовано пройти плановое ТО на 250 000 км с заменой всех жидкостей, поменять датчик кислорода.<br/>
                    </p>
                </div>
            </div>
        </div>
    );
};
