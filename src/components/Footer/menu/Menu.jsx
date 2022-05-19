import React, {useEffect, useState} from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";
import {ExternalLink} from "../../UI/externalLink";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";
import {Link as LinkScroll} from "react-scroll";

const Col = ({firstLink,secondLink, thirdLink}) =>{
    return (
        <div className={styles.col}>
            <ExternalLink href={"/"} className={styles.link}>{firstLink}</ExternalLink>
            <ExternalLink href={"/"} className={styles.link}>{secondLink}</ExternalLink>
            <ExternalLink href={"/"} className={styles.link}>{thirdLink}</ExternalLink>
        </div>
    )
}


export const Menu = () => {
    const [url, setUrl] = useState(null)
    const [partsUrl, setPartsUrl] = useState(document.location.href.split('/'))
    function useWindowSize() {
        const [size, setSize] = useState(document.body.clientHeight)
        useEffect(() => {
            const handleResize = () => {
                setSize(document.body.clientHeight)
            }
            window.addEventListener('scroll', handleResize)
        }, [])
        return size
    }
    const sizeHeight = useWindowSize();
    useEffect(() => {
        setUrl(document.location.href)
        const newUrl = document.location.href
        setPartsUrl(newUrl.split('/'))
    }, [sizeHeight])

    const anotherParts = ['about', 'article', 'service', 'blog'];

    const scrollTo = (idName) => {
        const pageY = document.getElementById(idName).getBoundingClientRect().y
        const bodyY = document.body.getBoundingClientRect().y
        setTimeout(() => {
            window.scrollTo(0, Math.abs(bodyY) + pageY)
        })
    }
    const {dispatch} = useModalContext()
    return (
        <div className={styles.fullMenu}>
            <div className={styles.col}>
                {
                    !anotherParts.every((item) => {
                        return item !== partsUrl[3]
                    })
                        ?
                        <a href={'/#services'} className={styles.link}>цены и Услуги</a>
                        :
                        <span  className={styles.link} onClick={() => scrollTo('services')}>цены и Услуги</span>
                }

                <Link to={"/about"} className={styles.link}>О компании</Link>
                {
                    !anotherParts.every((item) => {
                        return item !== partsUrl[3]
                    })
                        ?
                        <a href={'/#examples'} className={styles.link}>подобранные авто</a>
                        :
                        <span  className={styles.link} onClick={() => scrollTo('examples')}>подобранные авто</span>
                }
            </div>
            <div className={styles.col}>
                {
                    !anotherParts.every((item) => {
                        return item !== partsUrl[3]
                    })
                        ?
                        <a href={'/#feedback'} className={styles.link}>отзывы</a>
                        :
                        <span  className={styles.link} onClick={() => scrollTo('feedback')}>отзывы</span>
                }
                <Link to={"/blog"} className={styles.link}>блог</Link>
                <span className={styles.link} onClick={()=>dispatch({type:OPEN_MODAL})}>контакты</span>
            </div>
        </div>
    );
};




