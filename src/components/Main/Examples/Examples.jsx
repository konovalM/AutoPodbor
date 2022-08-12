import React, {useEffect, useState} from 'react';
import styles from './Examples.module.scss'
import {ExampleBig} from "../../cards/examplesCard";
import {ExampleSmall} from "../../cards/examplesCard";
import {getWorkExamples} from "../../../api/workExamplesApi";
import {PaginationComponent} from "../../UI/pagination/Pagination";





export const Examples = () => {
    const [page,setPage] = useState(1)
    const [examples,setExamples] = useState()
    const [current,setCurrent] =useState()

    useEffect(()=>{
        (async ()=>{
            const data = await getWorkExamples(page)
            setExamples(data)
            setCurrent(data.results[0])
        })()
    },[page])
    const setCurrentAndScrollTo = (cur) => {
        const pageY = document.querySelector('#examples').getBoundingClientRect().y
        const bodyY = document.body.getBoundingClientRect().y
        window.scrollTo(0, -bodyY+pageY)
        setCurrent(cur)
    }
    return (
        <section
            name={'#examples'}
            style={{ paddingBottom: "50px" }}
            className={styles.wrapper}
        >
            <h2 className={styles.title}>Примеры нашей работы</h2>
            {current && <ExampleBig post={current}/>}


            <div className={styles.content}>
                {examples?.results &&
                    examples.results.map((example, index) => (
                        <ExampleSmall
                            key={`${example.id}_${index}`}
                            setCurrent={setCurrentAndScrollTo}
                            post={example}
                        />
                    ))}
            </div>

            {examples?.page_count && (
                <PaginationComponent
                    background={'transparent'}
                    pageCount={examples.page_count}
                    setPage={setPage}
                />
            )}
        </section>
    );
};