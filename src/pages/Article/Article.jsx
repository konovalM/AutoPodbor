import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router";
import {ArticleBlock} from "../../components/articleBlock";
import {BlogArticles} from "../../components/blogArticles";
import {getBlogPost, getBlogPosts} from "../../api/blogApi";
import {PaginationComponent} from "../../components/UI/pagination/Pagination";
import styles from "../../components/Main/Check/Check.module.scss";
import bcg from '../../assets/images/RectangleBcg.png'
import {FormBlock} from "../../components/FormBlock";
import smallBcgRectangle from "../../assets/images/smallBcgRectangle.png";
import {BlackWrapper} from "../../components/blackWrapper";

export const Article = () => {
    const location = useLocation()
    const {id} = useParams()
    const nav = useNavigate()
    const [currentPost, setCurrentPost] = useState()
    const [page, setPage] = useState(1)

    const [posts, setPosts] = useState()
    useEffect(() => {
        (async () => {
            await getBlogPost(id).then(res => {
                nav(location.pathname, {state: res.title});
                setCurrentPost(res)
            }).catch(() => {
                nav("/not-found");
            })
        })()
    }, [id])
    useEffect(() => {
        (async () => {
            await getBlogPosts(page, 3).then(res => {
                setPosts(res)
            }).catch(() => {
                nav("/not-found");
            })
        })()
    }, [page])
    return (
        <main>
            <ArticleBlock post={currentPost}/>
            {
                posts?.results.length && <div style={{padding: "0 0 100px 0"}}>
                    <BlogArticles posts={posts.results} style={{flexWrap:"nowrap"}}/>
                    <PaginationComponent pageCount={posts.page_count} setPage={setPage}/>
                </div>
            }
            <BlackWrapper>
                <FormBlock/>
            </BlackWrapper>


        </main>
    );
};

