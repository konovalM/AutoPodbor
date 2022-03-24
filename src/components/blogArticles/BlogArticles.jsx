import React from 'react';
import {BlogCard} from "../cards/blogCard";
import styles from './BlogArticles.module.scss'

export const BlogArticles = ({posts}) => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {
                    posts.map(post=><BlogCard key={post.id} post={post}/>)
                }

            </div>
        </section>
    );
};

