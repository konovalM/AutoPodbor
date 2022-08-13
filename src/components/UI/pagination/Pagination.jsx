import React from 'react';
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import styles from './Pagination.module.scss'
import {ReactComponent as Next} from '../../../assets/images/breadcrumbs/next.svg'
import {ReactComponent as Prev} from '../../../assets/images/breadcrumbs/prev.svg'
export const PaginationComponent = ({setPage,pageCount, background = '#000', style}) => {

    return (
        <div className={styles.wrapper} style={{backgroundColor: `${background}`, ...style}}>
            <Pagination onChange={(page)=>setPage(page)} prevIcon={<Prev/>} nextIcon={<Next/>} className="ant-pagination"  total={pageCount*10} showLessItems />
        </div>
    );
};

