import React from 'react';
import body from '../../assets/images/check/body.png'
import computer from '../../assets/images/check/computer.png'
import kpp from '../../assets/images/check/kpp.png'
import engine from '../../assets/images/check/engine.png'
import lawyer from '../../assets/images/check/lawyer.png'
import running from '../../assets/images/check/running.png'
import {CheckCard} from "../cards/checkCard";
import styles from './Check.module.scss'
import cn from "classnames";


export const Check = () => {
    return (
        <section className={styles.black}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Что проверяем в машине</h2>
                <div className={styles.content}>
                    <div className={cn(styles.row, styles.first)}>
                        <CheckCard
                            src={body}
                            title={"Кузов"}
                            text={"Выявляем факты скрытого ДТП, ремонта, нарушения геометрии, окраса, снятия-установки элементов."}

                        />
                        <CheckCard
                            src={engine}
                            title={"Двигатель"}
                            text={"Ищем течи, проводим замер компрессии, осматриваем внутренности двигателя эндоскопом."}
                            isReversed={true}
                        />
                    </div>
                    <div className={cn(styles.row, styles.second)}>
                        <CheckCard
                            src={kpp}
                            title={"КПП"}
                            text={"Тестируем корректность переключения скоростей, проводим тест-драйв, смотрим  наличие шумов, вибраций."}
                        />
                        <CheckCard
                            src={running}
                            title={"Ходовая часть"}
                            text={"Проверяем плавность хода во время поездки, выявляем посторонние шумы, стуки."}
                            isReversed={true}
                        />
                    </div>
                    <div className={cn(styles.row, styles.third)}>
                        <CheckCard
                            src={computer}
                            title={"Компьютерная диагностика"}
                            text={"Находим следы корректировки пробега. ошибки электронных систем и блоков."}
                        />
                        <CheckCard
                            src={lawyer}
                            title={"Юридическая чистота"}
                            text={"Проверка по всем базам на угон, арест, залоги, ограничение на регистрационные действия."}
                            isReversed={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

