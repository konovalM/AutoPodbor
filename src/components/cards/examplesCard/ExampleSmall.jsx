import React from 'react';
import styles from './ExampleCardSmall.module.scss'
import car from '../../../assets/images/example/car.png'
import {Button} from "../../UI/button";
import cn from "classnames";

export const ExampleSmall = ({post,setCurrent}) => {
    return (
        <div className={styles.small}>
            <img src={post.img} className={styles.img}/>
            <div className={styles.row}>
                <div className={styles.texts}>
                    <h3 className={styles.carName}>{post.car_name}</h3>
                    <h4 className={styles.carDescription}>{post.after_price}, {post.year_of_issue} г.</h4>
                </div>
                <button className={styles.button} onClick={()=>setCurrent(post)}>
                    Смотреть
                </button>
            </div>
        </div>
    );
};

