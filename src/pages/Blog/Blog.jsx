import React, {useEffect, useState} from 'react';
import {BlogMain} from "../../components/blogMain";
import {useLocation, useNavigate, useParams} from "react-router";
import {getBlogPosts} from "../../api/blogAPI";
import styles from "../../components/Main/Check/Check.module.scss";
import {BlogArticles} from "../../components/blogArticles";
import {PaginationComponent} from "../../components/UI/pagination/Pagination";
import {FormBlock} from "../../components/FormBlock";
import blackBlogRec from "../../assets/images/waves/blackBlogRec.png";
import {BlackWrapper} from "../../components/blackWrapper";
import {WaveWrapper} from "../../components/wavesWrapper";

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

            <WaveWrapper src={blackBlogRec} alt={"blackBlogRec"}>
                {
                    posts?.results.length && <div style={{paddingTop:"150px"}}>
                        <BlogArticles posts={posts.results}/>
                        <PaginationComponent pageCount={posts.page_count} setPage={setPage}/>
                    </div>
                }

            </WaveWrapper>
            <BlackWrapper>
                <FormBlock/>

            </BlackWrapper>

        </main>
    );
};

