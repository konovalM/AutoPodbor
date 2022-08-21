import React, {useEffect, useState} from 'react';
import styles from './Catalog.module.css'
import {Cards} from "../../Catalog/CatalogCards/CatalogCards";
import {useNavigate} from "react-router";
import {getCatalogItems} from "../../../api/catalogAPI";
import {Button} from "../../UI/button";
import {abroad} from "../../../router/AppRouter";

const Catalog = () => {
    const nav = useNavigate()
    const [items, setItems] = useState([])
    useEffect(() => {
        (async () => {
            await getCatalogItems(1, 6).then(setItems).catch(() => {
                nav("/not-found");
            })
        })()
    }, [])
    return (
        <section className={styles.main}>
            <div className="container">
                <h5 className={styles.title}>Каталог</h5>
                {
                    !!items?.results?.length &&
                    <Cards cars={items?.results}/>
                }
                <Button text='Перейти в каталог' className={styles.btn} onClick={() => nav(`/${abroad}/catalog`)}/>
            </div>
        </section>
    );
};

export default Catalog;