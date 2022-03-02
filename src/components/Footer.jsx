import React from 'react';
import "./footer.scss";
import Modal from "./Modal";
import "./modal.scss";
const Footer = () => {
    return (
            <footer className="page-footer font-small">
                <div className="container">
                    <ul className="navbar-nav text-left" >
                        <li className="nav-item">
                            <a className="nav-item nav-link" href="#">
                                <div className="row m-0 LF">
                                    <div className="logoFooter" >
                                        <img src="../images/logoFooter.svg" alt=''/>
                                    </div>
                                    <div className='text'>
                                        Честный<br/>автоподборр
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link" href="#">ЦЕНЫ И УCЛУГИ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link" href="#">ОТЗЫВЫ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link " href="#">О КОМПАНИИ ПОДОБРАННЫЕ АВТО</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link " href="#">БЛОГ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link " href="#">ПОДОБРАННЫЕ АВТО</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link " href="#">ПОЛИТИКА КОНФИДЕНЦИПЛЬНОСТИ</a>
                        </li>
                        <li className="nav-item">
                            <div className="row m-0 maps">
                                <img className='mapsIMG' src="../images/maps.png"/>
                                <div className="col">
                                    <p className="adrress mb-0 pt-1">
                                        <span className="wt">Работаем в офисе:</span>
                                        <span><br/>г. СПб, ул. Оптиков, 1к3</span></p>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="row m-0 maps">
                                <img className='mapsIMG' src="../images/Woman.png"/>
                                <div className="col">
                                    <p className="number mb-0 pt-1">
                                        <span className="WT">+7 (999) 200-93-30</span>
                                        <br/>
                                        <span className="contact">
                                        Заказать звонок
                                    </span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="pl-0 mb-3">
                                <span>
                            Ждем тебя у нас<br/>
                            с 9:00 до 22:00
                                </span>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <img className="mr-2" src="../images/logoSot/W.svg"/>
                                    <img className="mr-2" src="../images/logoSot/tg.svg"/>
                                    <img className="mr-2" src="../images/logoSot/VK.svg"/>
                                    <img className="mr-2" src="../images/logoSot/inst.svg"/>
                                    <img className="mr-2" src="../images/logoSot/yt.svg"/>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <span className="Ozzo">Сайт сделан ozzostudio.ru</span>
                        </li>
                    </ul>
                </div>
                <Modal/>
            </footer>
    );
};

export default Footer;
