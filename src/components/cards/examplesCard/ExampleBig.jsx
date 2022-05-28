import React, {useEffect, useState} from "react";
import styles from "./ExampleCard.module.scss";

export const ExampleBig = ({ post}) => {
  const [images, setImages] = useState(post.additional_images)
  const [activeImage, setActiveImage] = useState(post.img)
  useEffect(() => {
    setImages(post.additional_images)
    setActiveImage(post.img)
  }, [post])

  const changeActive = (img, index) => {
    const clonedImages = [...images]
    clonedImages[index] = activeImage
    setActiveImage(img)
    setImages(clonedImages)
  }

  return (
    <div className={styles.card}>
      <div className={styles.sua}>
        {" "}
        <div className={styles.suaWrapper}>
          <img src={activeImage} className={styles.img} id='exampleBigCard' alt={"example big card"} />
        </div>
        {post.additional_images.length !== 0 ? (
          <div className={styles.tumbnails}>
            {/* <div style={{backgroundColor:'black'}}> */}
              {images.map((el, i) => {
                return (
                  <div className={styles.tumbEl} style={{width: `100%`}} key={i}>
                    <img src={el} alt="" onClick={() => changeActive(el, i)}/>
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
            <span className={styles.textBold}>Задача: </span>{post.task}
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
