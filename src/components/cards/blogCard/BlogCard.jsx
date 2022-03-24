import React from 'react';
import styles from './BlogCard.module.scss'
import video from '../../../assets/images/video.jpg'
import {Button} from "../../UI/button";
import {convertToRussianPointDate} from "../../../utils/date";
import {useNavigate} from "react-router";


export const BlogCard = ({post}) => {
    const nav = useNavigate()
    return (
        <div className={styles.card}>
            <img src={post.asset} alt={"video"} className={styles.img}/>
            <h3 className={styles.title}>
                {post.title}
            </h3>
            <p className={styles.text}>
                {post.content}
            </p>
            <span className={styles.date}>
                {convertToRussianPointDate(post.created)}
            </span>
            <Button text={"Читать"} className={styles.btn} onClick={()=>nav(`/article/${post.id}`)}/>
        </div>
    );
};

