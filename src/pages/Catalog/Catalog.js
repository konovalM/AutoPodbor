import React, {useEffect, useState} from 'react';
import styles from './Catalog.module.css'
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";
import Main from "../../components/Catalog/Main/Main";
import CatalogCards from "../../components/Catalog/CatalogCards/CatalogCards";
import {useNavigate} from "react-router";
import {getCatalogItems} from "../../api/catalogAPI";
import {getBlogPosts} from "../../api/blogAPI";
import {BlogArticles} from "../../components/blogArticles";
import {PaginationComponent} from "../../components/UI/pagination/Pagination";
import {FormBlock} from "../../components/FormBlock";

const Catalog = () => {
    const nav = useNavigate()

    const [page, setPage] = useState(1)

    const [items, setItems] = useState()
    useEffect(() => {
        (async () => {
            await getCatalogItems(page).then(setItems).catch(() => {
                nav("/not-found");
            })
        })()
    }, [page])
    return (
        <>
            <BreadcrumbsLayout text={"Каталог"}>
                <div style={{overflowX: 'hidden'}}>

                    <Main/>
                    {/*<div className={styles.bgBlack}>*/}
                    {/*<div className={styles.wave}>

                        <div className={styles.ellipse}>*/}
                    {
                        items?.results.length && <>
                            <CatalogCards cars={items.results}/>
                            <PaginationComponent pageCount={items.page_count} setPage={setPage}
                                                 style={{padding: '3px', margin: '-3px'}}/>
                            {/*<BlogArticles posts={posts.results}/>*/}
                            {/*<PaginationComponent pageCount={posts.page_count} setPage={setPage}/>*/}
                        </>
                    }
                    <div className={styles.lines} style={{background: '#000'}}>
                        <FormBlock/>
                    </div>
                    {/*</div>

                </div>*/}
                    {/*</div>*/}
                </div>
            </BreadcrumbsLayout>
        </>
    );
};

export default Catalog;