import React from 'react';
import styles from './Garantier.module.scss'
import cn from "classnames";
import letter from '../../../assets/images/garant/letter.png'

export const Garantier = () => {

    return (
      <section className={styles.wrapper}>
        <h2 className={styles.titleMain}>
          Предоставляем гарантию
        </h2>
        <div className={styles.content}>
          <div className={styles.card}>
            <span className={cn(styles.isPay, styles.white)}>Бесплатная</span>
            <div className={styles.textContent}>
              <h3 className={styles.title}>
                Вернем <span className={styles.yellow} >20 000 ₽</span> в течение{" "}
                <span className={styles.bold}>14 дней</span>
              </h3>

              <div className={styles.list}>
                <div className={styles.circle} />
                <div className={styles.bigText} dangerouslySetInnerHTML={{__html: localStorage.getItem('warranty_text11')}}>

                </div>
              </div>
              <p className={styles.smallText} dangerouslySetInnerHTML={{__html: localStorage.getItem('warranty_text111')}}>

              </p>
            </div>
            <img src={letter} alt={"letter"} className={styles.letter} />
          </div>

          <div className={styles.card}>
            <span className={cn(styles.isPay, styles.yellow)}>Расширенная</span>
            <div className={styles.textContent}>
              <h3 className={styles.title}>
                Отремонтируем на <br></br>
                <span className={styles.yellow}> 100 000 ₽ </span>
                за <span className={styles.bold}>60 дней</span>
              </h3>

              <div className={styles.list}>
                <div className={styles.circle} />
                <div className={styles.bigText} dangerouslySetInnerHTML={{__html: localStorage.getItem('warranty_text22')}}>

                </div>
              </div>
              <p className={styles.smallText} dangerouslySetInnerHTML={{__html: localStorage.getItem('warranty_text222')}}>

              </p>
            </div>
            <img src={letter} alt={"letter"} className={styles.letter} />
          </div>
        </div>
      </section>
    );
};

