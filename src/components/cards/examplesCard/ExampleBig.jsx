import React from "react";
import styles from "./ExampleCard.module.scss";

export const ExampleBig = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.sua}>
        {" "}
        <img src={post.img} className={styles.img} alt={"example big card"} />
        {post.additional_images.lenght !== 0 ? (
          <div className={styles.tumbnails}>
            {post.additional_images.map((el) => {
              return (
                <div className={styles.tumbEl}>
                  <img src={el} alt="" />
                </div>
              );
            })} 
          </div>
        ) : null}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{post.car_name}</h3>
            <h4 className={styles.subtitle}>
              {post.year_of_issue} год выпуска
            </h4>
          </div>
          <div>
            <p className={styles.prices}>
              Цена продавца: {post.saler_price}руб
            </p>
            <p className={styles.prices}>После торга: {post.after_price}руб.</p>
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
            <div dangerouslySetInnerHTML={{ __html: post.result }} />
          </div>
        </div>
      </div>
    </div>
  );
};
