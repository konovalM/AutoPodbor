import React, {useEffect, useState} from 'react';
import styles from './Catalog.module.css'
import {BreadcrumbsLayout} from "../../../layout/breadcrumbsLayout";
import Main from "../../../components/Catalog/Main/Main";
import CatalogCards from "../../../components/Catalog/CatalogCards/CatalogCards";
import {useNavigate} from "react-router";
import {getCatalogItems} from "../../../api/catalogAPI";
import {getBlogPosts} from "../../../api/blogAPI";
import {BlogArticles} from "../../../components/blogArticles";
import {PaginationComponent} from "../../../components/UI/pagination/Pagination";
import {FormBlock} from "../../../components/FormBlock";
import {useFilterContext} from "../../../contexts/FilterContext";

const Catalog = () => {
    const nav = useNavigate()
    const {state} = useFilterContext()
    const [page, setPage] = useState(1)
    const [items, setItems] = useState()
    useEffect(() => {
        (async () => {
            await getCatalogItems(page, 12, state.activeFilter).then(setItems).catch((e) => {
                nav("/not-found");
            })
        })()
    }, [page, state])
    return (
        <>
            <BreadcrumbsLayout text={"Каталог"}>
                <div style={{overflowX: 'hidden'}}>

                    <Main/>
                    <CatalogCards cars={items?.results}/>
                    {
                        !!items?.results.length &&
                        <PaginationComponent pageCount={items.page_count} setPage={setPage}
                                             style={{padding: '3px', margin: '-3px'}}/>
                    }
                    <div className={styles.lines} style={{background: '#000'}}>
                        <FormBlock/>
                    </div>
                </div>
            </BreadcrumbsLayout>
        </>
    );
};

export default Catalog;