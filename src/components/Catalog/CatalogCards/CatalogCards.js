import React from 'react';
import styles from './CatalogCards.module.css'
import {Button} from "../../UI/button";
import imgMock from '../../../assets/images/catalog/catalogItemMock.jpg'
import keys from '../../../assets/images/catalog/keys.png'

const CatalogCards = () => {
    return (
        <section className={styles.wave}>
            <img src={keys} alt="keys" className={styles.keys}/>
            <div className={styles.background}>
                <div className="container">
                    <div className={styles.btnWrapper}>
                        <Button text='от 1,2 до 1,3 млн. руб.' className={styles.btn}/>
                        <Button text='от 1,3 до 2 млн. руб.' className={styles.btn}/>
                        <Button text='от 2 млн. руб. и дороже.' className={styles.btn}/>
                    </div>
                    <div className={styles.catalogGrid}>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <Button text='Подробнее' className={styles.moreBtn}/>
                            <img src={imgMock} alt="mock" className={styles.catalogItemImg}/>
                            <div className={styles.description}>
                                <h5 className={styles.name}>Toyota Land Cruiser 300</h5>
                                <p className={styles.year}>2003 год выпуска</p>
                                <p className={styles.price}>Цена: 1 900 000 руб.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatalogCards;