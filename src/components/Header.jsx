import React from 'react';
import './header.scss';
import './Modal';
const Header = () => {
    return (
        <header>
            <div className="container">
            <nav className="navbar  ">
                <a className="navbar-brand" href="#">
                    <div className="row m-0">
                        <img className='logo' src="../images/logo.svg"/>
                        <div className="col">
                            <p className="number mb-0 pt-1">+7 (999) 200-93-30</p>

                            <p className="contact mb-0" data-toggle="modal"
                               data-target="#exampleModal">заказать звонок</p>
                        </div>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="./images/menu.svg"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-left" >
                        <li className="nav-item">
                            <a className="nav-item nav-link" href="#">
                                <div className="row m-0">
                                <div className="maps " >
                                <img src="../images/maps.png" alt=''/>
                                </div>
                                <div className='address'>
                                    Работаем в офисе:<br/>
                                    г. СПб, Богатырский проспект 42/а
                                </div>
                                </div>
                                <div className="mt-3">
                                    Ждем тебя у нас<br/>
                                    с 9:00 до 22:00
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link" href="#">УCЛУГИ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link" href="#">О КОМПАНИИ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link " href="#">ПОДОБРАННЫЕ АВТО</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link " href="#">ОТЗЫВЫ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link " href="#">БЛОГ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link " href="#">КОНТАКТЫ</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </header>
    );
};

export default Header;
