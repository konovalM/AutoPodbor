import "./main.scss"
import React from 'react';

const Main = () => {
    return (
        <div className="Main">
            <div className="container">
                <p className="title">
                    <span className="orang">Бесплатный</span> <span className="black">подбор авто</span> с выездом специалиста в Петербурге и Ленобласти
                </p>
                <div className="titleTho">
                    Даем гарантию юридической чистоты и технической исправности машины, помогаем с документами
                </div>
            </div>
            <div className="fonBlock">
                <div className="container">
                    <div className="col-sm-6 col-9 Money">
                        <div className="row">
                            <div className="col-2 img">
                     <img src="../images/Main/Money.png"/>
                            </div>
                            <div className="col-10 text">
                                    <p>Наши услуги окупаются в 95% случаев</p>
                            </div>
                        </div>
                    </div>
                    <div className="but">
                        <button>
                            Оставить заявку
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-12 blockTho">
                    <div className="row block">
                        <div>
                            <img src="../images/Main/orange-pig.png"/>
                        </div>
                        <div className="col text">
                            <h5>Экономия</h5>
                            <p>
                                Добиваемся от продавца максимальной скидки
                            </p>
                        </div>
                    </div>
                    <div className="row block">
                        <div>
                            <img src="../images/Main/cube.png"/>
                        </div>
                        <div className="col text">
                            <h5>0% с торга</h5>
                            <p>
                                В отличие от конкурентов не берем процент с торга
                            </p>
                        </div>
                    </div>
                    <div className="row block">
                        <div className="pt-2">
                            <img src="../images/Main/CarImg.png"/>
                        </div>
                        <div className="col text">
                            <h5>Полный осмотр</h5>
                            <p>
                                Наш специалист проверяет машину на месте
                            </p>
                        </div>
                    </div>
                </div>
                <div className="question">
                    <p className="title">
                        Почему выбирают нас
                    </p>
                    <div className="row">
                        <div className="col-6 block">
                            <div className="imgBlock">
                            <img src="../images/Main/Block1.png"/>
                            </div>
                            <p className="titleTho">Более 2000 подобранных авто</p>
                            <p className="textBody">Имеем огромный опыт по поиску автомобилей и выявлению в них неполадок. Клиенты оставили более 1300 отзывов в ВКонтакте и Яндексе.</p>
                        </div>
                        <div className="col-6 block">
                            <div className="imgBlock">
                            <img src="../images/Main/Block2.png"/>
                            </div>
                            <p className="titleTho">Экономия времени</p>
                            <p className="textBody">Самостоятельно выезжаем на осмотр и проверку автомобиля. Торгуемся с продавцом и помогаем с оформлением документов при покупке.</p>
                        </div>
                        <div className="col-6 block">
                            <div className="imgBlock">
                            <img src="../images/Main/Block3.png"/>
                            </div>
                            <p className="titleTho">Не берем процент с торга</p>
                            <p className="textBody">Большинство конкурентов зарабатывают на проценте с торга и вместо нужной клиенту машины выбирают ту, с которой можно получить скидку крупнее.</p>
                        </div>
                        <div className="col-6 block">
                            <div className="imgBlock">
                            <img src="../images/Main/Block4.png"/>
                            </div>
                            <p className="titleTho">Гарантия на услуги</p>
                            <p className="textBody">Обязуемся вернуть деньги в случае, если после нашего подбора в автомобиле выявились скрытые дефекты. Готовы отремонтировать машину за свой счет. </p>
                        </div>
                        <div className="col-6 block">
                            <div className="imgBlock">
                            <img src="../images/Main/Block5.png"/>
                            </div>
                            <p className="titleTho">Проверка по закрытым базам</p>
                            <p className="textBody">Пробиваем автомобиль по базам ГИБДД и по собственным каналам. Выявляем юридические нарушения и несоответствия в документах. </p>
                        </div>
                        <div className="col-6 block">
                            <div className="imgBlock">
                            <img src="../images/Main/Block6.png"/>
                            </div>
                            <p className="titleTho">Работаем с 2017 года</p>
                            <p className="textBody">За все годы работы осмотрели более 5000 автомобилей. Отработанная методика подбора позволяет находить клиенту автомобиль за минимальный срок.</p>
                        </div>
                    </div>
                </div>
                    <div className="services">
                        <div className="title">
                            Услуги и цены
                        </div>
                        <div className="row">
                        <div className="col-6 block">
                            <div className="imgBlock">
                                <img src="../images/Main/Block6.png"/>
                            </div>
                            <p className="titleTho">Работаем с 2017 года</p>
                            <p className="textBody">За все годы работы осмотрели более 5000 автомобилей. Отработанная методика подбора позволяет находить клиенту автомобиль за минимальный срок.</p>
                        </div>
                        <div className="col-6 block">
                        <div className="imgBlock">
                            <img src="../images/Main/Block6.png"/>
                        </div>
                        <p className="titleTho">Работаем с 2017 года</p>
                        <p className="textBody">За все годы работы осмотрели более 5000 автомобилей. Отработанная методика подбора позволяет находить клиенту автомобиль за минимальный срок.</p>
                    </div>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Main;
