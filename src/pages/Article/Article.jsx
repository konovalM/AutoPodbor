import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router";
import {ArticleBlock} from "../../components/articleBlock";
import {BlogArticles} from "../../components/blogArticles";
import {getBlogPost, getBlogPosts} from "../../api/blogAPI";
import {PaginationComponent} from "../../components/UI/pagination/Pagination";
import blackArticleRec from '../../assets/images/waves/blackArticleRec.png'
import {FormBlock} from "../../components/FormBlock";
import {WaveWrapper} from "../../components/wavesWrapper";

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
            await getBlogPosts(page, 3).then(setPosts).catch(() => {
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
            <WaveWrapper src={blackArticleRec} alt={"blackArticleRec"}>
                <FormBlock/>
            </WaveWrapper>

        </main>
    );
};

