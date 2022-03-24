import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router";
import {ArticleBlock} from "../../components/articleBlock";
import {BlogArticles} from "../../components/blogArticles";
import {getBlogPost, getBlogPosts} from "../../api/blogApi";
import {PaginationComponent} from "../../components/UI/pagination/Pagination";

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
            await getBlogPosts(page).then(res => {
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
                posts?.results.length && <>
                    <BlogArticles posts={posts.results}/>
                    <PaginationComponent pageCount={posts.page_count} setPage={setPage}/>
                </>
            }

        </main>
    );
};

