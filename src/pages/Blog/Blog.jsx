import React, {useEffect, useState} from 'react';
import {BlogMain} from "../../components/blogMain";
import {useLocation, useNavigate, useParams} from "react-router";
import {getBlogPosts} from "../../api/blogApi";
import styles from "../../components/Main/Check/Check.module.scss";
import blackBcg from "../../assets/images/blackBcg.jpg";
import {Form} from "../../components/UI/Forms";
import {BlogArticles} from "../../components/blogArticles";
import {PaginationComponent} from "../../components/UI/pagination/Pagination";
import {FormBlock} from "../../components/FormBlock";

export const Blog = () => {
    const location = useLocation()
    const {id} = useParams()
    const nav = useNavigate()

    const [page, setPage] = useState(1)

    const [posts, setPosts] = useState()
    useEffect(() => {
        nav(location.pathname, {state: "Блог"});

    }, [])

    useEffect(() => {
        (async () => {
            await getBlogPosts(1)
        })()
    }, [])
    useEffect(() => {
        (async () => {
            await getBlogPosts(page).then(res => {
                setPosts(res)
            }).catch(() => {
                nav("/not-found");
            })
        })()
    }, [page])

    return (
        <main style={{margin: "0 auto"}}>
            <BlogMain/>
            <section className={styles.black}>
                <img src={blackBcg} alt={"Black background"} className={styles.img}/>
                {
                    posts?.results.length && <div>
                        <BlogArticles posts={posts.results}/>
                        <PaginationComponent pageCount={posts.page_count} setPage={setPage}/>
                    </div>
                }
                <FormBlock/>
            </section>
        </main>
    );
};

