import React from 'react';
import styles from './MainAbout.module.scss'
import slider from '../../../assets/images/aboutPage/slider.jpg'
import {Carousel} from "react-bootstrap";
import {ReactComponent as Next} from '../../../assets/images/aboutPage/next.svg'
import {ReactComponent as Prev} from '../../../assets/images/aboutPage/prev.svg'



const Slider = () => {
    return(
        <Carousel indicators={false} prevIcon={<Prev/>} nextIcon={<Next/>}>
            <Carousel.Item interval={5000} >
                <img className={styles.item}
                    src={slider}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className={styles.item}
                    src={slider}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={styles.item}
                    src={slider}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}


export const MainAbout = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        О компании
                    </h1>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <Slider/>
            </div>
        </section>
    );
};

