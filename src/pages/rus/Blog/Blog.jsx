import React, {useEffect, useState} from 'react';
import {BlogMain} from "../../../components/blogMain";
import {useNavigate} from "react-router";
import {getBlogPosts} from "../../../api/blogAPI";
import {BlogArticles} from "../../../components/blogArticles";
import {PaginationComponent} from "../../../components/UI/pagination/Pagination";
import {FormBlock} from "../../../components/FormBlock";
import {BreadcrumbsLayout} from "../../../layout/breadcrumbsLayout";

export const Blog = () => {
    const nav = useNavigate()

    const [page, setPage] = useState(1)

    const [posts, setPosts] = useState()

/*    useEffect(() => {
        (async () => {
            await getBlogPosts(1)
        })()
    }, [])*/
    useEffect(() => {
        (async () => {
            await getBlogPosts(page).then(setPosts).catch(() => {
                nav("/not-found");
            })
        })()
    }, [page])

    return (
        <BreadcrumbsLayout text={"Блог"}>
            <main style={{margin: "0 auto"}}>
                <BlogMain/>
                    {
                        posts?.results.length && <div>
                            <BlogArticles posts={posts.results}/>
                            <PaginationComponent pageCount={posts.page_count} setPage={setPage}/>
                        </div>
                    }
                <div style={{backgroundColor: '#000'}}>
                    <FormBlock/>
                </div>

            </main>
        </BreadcrumbsLayout>
    );
};

