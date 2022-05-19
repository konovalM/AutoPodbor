import React from 'react';
import styles from "./ArticleBlock.module.scss"
import video from '../../assets/images/video.jpg'
import christmasTree from '../../assets/images/article/christmasTree.png'
import carAndTree from '../../assets/images/article/carAndTree.png'
import carMobile from '../../assets/images/carMobileArticle.png'
import {convertToRussianDate} from "../../utils/date";


export const ArticleBlock = ({post}) => {
    const newYoutubeLink = post?.asset.replace("watch?v=","embed/")

    return (
        <section className={styles.wrapper}>
            <picture>
                <source srcSet={carMobile} media="(max-width: 300px)" />
                <img src={carAndTree} alt={"Car with tree"} className={styles.car} />
            </picture>
            <img src={christmasTree} alt={"Брелок"} className={styles.tree}/>

            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <h1 className={styles.title}>
                            {post?.title}
                        </h1>
                        <span>{convertToRussianDate(post?.created)}</span>
                    </div>

                    <div className={styles.iframe}>
                        {
                            newYoutubeLink.indexOf('embed/') === -1 ?
                                <img src={newYoutubeLink} alt="Preview of Article" className={styles.articlePhoto}/>
                                    :
                                <iframe src={newYoutubeLink} className={styles.img}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                        }
                        <p className={styles.text}>
                            {post?.content}
                        </p>
                    </div>
                </div>
                <div className={styles.line}/>
            </div>
        </section>
    );
};

