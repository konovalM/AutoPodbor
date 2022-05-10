import React from 'react';
import {BlogCard} from "../cards/blogCard";
import styles from './BlogArticles.module.scss'

export const BlogArticles = ({posts,style}) => {

    return (
        <div className={styles.articleWrapper}>
            <section className={styles.wrapper}>
                <div className={styles.container} style={style}>

                    {
                        posts.map((post,index)=>{
                            if (index>2){
                                return <BlogCard key={post.id} post={post} isRow={true}/>
                            }
                            return <BlogCard key={post.id} post={post} isRow={false}/>
                        })
                    }

                </div>
            </section>
        </div>
    );
};

