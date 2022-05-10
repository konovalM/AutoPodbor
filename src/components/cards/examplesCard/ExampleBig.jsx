import React, { useEffect } from "react";
import styles from "./ExampleCard.module.scss";

export const ExampleBig = ({ post }) => {
  useEffect(() => console.log(post.additional_images.length));
  return (
    <div className={styles.card}>
      <div className={styles.sua}>
        {" "}
        <div className={styles.suaWrapper}>
          <img src={post.img} className={styles.img} alt={"example big card"} />
        </div>
        {post.additional_images.length !== 0 ? (
          <div className={styles.tumbnails}>
            {/* <div style={{backgroundColor:'black'}}> */}
              {post.additional_images.map((el) => {
                return (
                  <div className={styles.tumbEl} style={{width: `100%`}}>
                    <img src={el} alt="" />
                  </div>
                );
              })}
            {/* </div> */}
          </div>
        ) : null}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
            <h3 className={styles.title}>
              {post.car_name}<br/>
              <span className={styles.subtitle}>{post.year_of_issue} год выпуска</span>
            </h3>
          <div>
            <p className={styles.prices}>
              Цена продавца: {post.saler_price}руб<br/>
              После торга: {post.after_price}руб.
            </p>
          </div>
        </div>
        <div>
          <p className={styles.text}>
            <span className={styles.textBold}>Задача: </span>Найти автомобиль с
            заданными параметрами, подходящий потенциальному покупателю. Найти
            автомобиль с заданными параметрами, подходящий потенциальному
            покупателю.{" "}
          </p>
          <div className={styles.text}>
            <span className={styles.textBold}>Результат:</span>
            <br />
            <div dangerouslySetInnerHTML={{ __html: post.result }} className={styles.resultText}/>
          </div>
        </div>
      </div>
    </div>
  );
};
