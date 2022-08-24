import React, {useEffect, useState} from 'react';
import styles from './Catalog.module.css'
import {BreadcrumbsLayout} from "../../../layout/breadcrumbsLayout";
import Main from "../../../components/Catalog/Main/Main";
import CatalogCards from "../../../components/Catalog/CatalogCards/CatalogCards";
import {useNavigate} from "react-router";
import {getCatalogItems} from "../../../api/catalogAPI";
import {PaginationComponent} from "../../../components/UI/pagination/Pagination";
import {FormBlock} from "../../../components/FormBlock";
import {useFilterContext} from "../../../contexts/FilterContext";
import {getFilterRanges} from "../../../api/getFilterRangesAPI";

const Catalog = () => {
    const nav = useNavigate()
    const {state} = useFilterContext()
    const [page, setPage] = useState(1)
    const [items, setItems] = useState()
    const [filterButtons, setFilterButtons] = useState(null)
    useEffect(async () => {
            await getCatalogItems(page, 12, state.activeFilter).then(setItems).catch((e) => {
                nav("/not-found");
            })

    }, [page, state])
    useEffect(async () => {
        await getFilterRanges().then(setFilterButtons).catch((e) => {
            nav("/not-found");
        })
    }, [])

    return (
        <>
            <BreadcrumbsLayout text={"Каталог"}>
                <div style={{overflowX: 'hidden'}}>

                    <Main/>
                    <CatalogCards cars={items?.results} filterButtons={filterButtons}/>
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