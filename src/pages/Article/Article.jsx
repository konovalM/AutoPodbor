import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {ArticleBlock} from "../../components/articleBlock";
import {BlogArticles} from "../../components/blogArticles";
import {getBlogPost, getBlogPosts} from "../../api/blogAPI";
import {PaginationComponent} from "../../components/UI/pagination/Pagination";
import blackArticleRec from '../../assets/images/waves/blackArticleRec.png'
import {FormBlock} from "../../components/FormBlock";
import {WaveWrapper} from "../../components/wavesWrapper";
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";
import styles from './Article.module.scss'
import {BlogCard} from "../../components/cards/blogCard";

export const Article = () => {
    const {id} = useParams()
    const nav = useNavigate()
    const [currentPost, setCurrentPost] = useState()
    const [page, setPage] = useState(1)

    const [posts, setPosts] = useState()
    useEffect(() => {
        (async () => {
            await getBlogPost(id).then(setCurrentPost).catch(() => {
                nav("/not-found");
            })
        })()
    }, [id])
    useEffect(() => {
        (async () => {
            await getBlogPosts(page, 3).then(setPosts).catch(() => {
                nav("/not-found");
            })
        })()
    }, [page])
    return (
        <div className={styles.overflow}>
            <BreadcrumbsLayout text={currentPost?.title || ""}>
                <main>
                    <ArticleBlock post={currentPost}/>
                    {
                        posts?.results.length && <div>
                            <div className={styles.articleWrapper}>
                                <section className={styles.wrapper}>
                                    <div className={styles.container}>

                                        {
                                            posts.results.map((post,index)=>{
                                                if (index>2){
                                                    return <BlogCard key={post.id} post={post} isRow={true}/>
                                                }
                                                return <BlogCard key={post.id} post={post} isRow={false}/>
                                            })
                                        }

                                    </div>
                                </section>
                            </div>
                            <PaginationComponent pageCount={posts.page_count} setPage={setPage} background={'#fff'}/>
                        </div>
                    }
                    <div className={styles.wave}>
                        <div style={{backgroundColor: '#000'}}>
                            <FormBlock/>
                        </div>
                    </div>
                </main>
            </BreadcrumbsLayout>
        </div>
    );
};

