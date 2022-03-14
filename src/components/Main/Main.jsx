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
                        <div className="whitLine">

                        </div>
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
                            <div className="col-6">
                                <div className="block">
                                    <p className="title">Автоподбор под ключ</p>
                                    <p className="textBody">За все годы работы осмотрели более 5000 автомобилей. Отработанная методика подбора позволяет находить клиенту автомобиль за минимальный срок.</p>
                                    <div className="BlackLine">
                                        <p>от <span className="namber">20 000</span> ₽</p>
                                    </div>
                                    <div className="count">
                                        <button className="application">
                                            ОСТАВИТЬ ЗАЯВКУ
                                        </button>
                                        <button className="detailed">
                                            ПОДРОБНЕЕ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="block">
                                    <p className="title">Автоподбор под ключ</p>
                                    <p className="textBody">За все годы работы осмотрели более 5000 автомобилей. Отработанная методика подбора позволяет находить клиенту автомобиль за минимальный срок.</p>
                                    <div className="BlackLine">
                                        <p>от <span className="namber">20 000</span> ₽</p>
                                    </div>
                                    <div className="count">
                                        <button className="application">
                                            ОСТАВИТЬ ЗАЯВКУ
                                        </button>
                                        <button className="detailed">
                                            ПОДРОБНЕЕ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="block">
                                    <p className="title">Автоподбор под ключ</p>
                                    <p className="textBody">За все годы работы осмотрели более 5000 автомобилей. Отработанная методика подбора позволяет находить клиенту автомобиль за минимальный срок.</p>
                                    <div className="BlackLine">
                                        <p>от <span className="namber">20 000</span> ₽</p>
                                    </div>
                                    <div className="count">
                                        <button className="application">
                                            ОСТАВИТЬ ЗАЯВКУ
                                        </button>
                                        <button className="detailed">
                                            ПОДРОБНЕЕ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="block">
                                    <p className="title">Автоподбор под ключ</p>
                                    <p className="textBody">За все годы работы осмотрели более 5000 автомобилей. Отработанная методика подбора позволяет находить клиенту автомобиль за минимальный срок.</p>
                                    <div className="BlackLine">
                                        <p>от <span className="namber">20 000</span> ₽</p>
                                    </div>
                                    <div className="count">
                                        <button className="application">
                                            ОСТАВИТЬ ЗАЯВКУ
                                        </button>
                                        <button className="detailed">
                                            ПОДРОБНЕЕ
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="problem">
                    <p className="title">
                        Проблемы при самостоятельной покупке
                    </p>
                    <div className="block">
                        <img src="../images/Main/problem/01.png"/>
                        <p className="title">
                            Скручивание пробега
                        </p>
                        <p className="body">
                            Большинство автомобилей на рынке имеют заниженный пробег
                        </p>
                    </div>
                    <div className="block">
                        <img src="../images/Main/problem/01.png"/>
                        <p className="title">
                            Скручивание пробега
                        </p>
                        <p className="body">
                            Большинство автомобилей на рынке имеют заниженный пробег
                        </p>
                    </div>
                    <div className="block">
                        <img src="../images/Main/problem/01.png"/>
                        <p className="title">
                            Скручивание пробега
                        </p>
                        <p className="body">
                            Большинство автомобилей на рынке имеют заниженный пробег
                        </p>
                    </div>
                    <div className="block">
                        <img src="../images/Main/problem/01.png"/>
                        <p className="title">
                            Скручивание пробега
                        </p>
                        <p className="body">
                            Большинство автомобилей на рынке имеют заниженный пробег
                        </p>
                    </div>
                    <div className="block">
                        <img src="../images/Main/problem/01.png"/>
                        <p className="title">
                            Скручивание пробега
                        </p>
                        <p className="body">
                            Большинство автомобилей на рынке имеют заниженный пробег
                        </p>
                    </div>
                    <div className="block">
                        <img src="../images/Main/problem/01.png"/>
                        <p className="title">
                            Скручивание пробега
                        </p>
                        <p className="body">
                            Большинство автомобилей на рынке имеют заниженный пробег
                        </p>
                    </div>
                </div>
            </div>
            <div className="blackBlock">
                <div className="container">
                    <div className="title">
                        Что проверяем в машине
                    </div>
                    <div className="row">
                        <div className="col-6 carImg">
                            <img src="../images/Main/car/1.png"/>
                        </div>
                        <div className="col-6">
                            <p className="titleCar">Кузов</p>
                            <p className="bodyCar">Выявляем факты скрытого ДТП, ремонта, нарушения геометрии, окраса, снятия-установки элементов.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 carImg">
                            <img src="../images/Main/car/2.png"/>
                        </div>
                        <div className="col-6">
                            <p className="titleCar">Двигатель</p>
                            <p className="bodyCar">Ищем течи, проводим замер компрессии, осматриваем внутренности двигателя эндоскопом.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 carImg">
                            <img src="../images/Main/car/3.png"/>
                        </div>
                        <div className="col-6">
                            <p className="titleCar">КПП</p>
                            <p className="bodyCar">Тестируем корректность переключения скоростей, проводим тест-драйв, смотрим  наличие шумов, вибраций.</p>
                        </div>
                    </div>
                    <div className="row">
                        <img className="car col-12" src="../images/Main/car/car.png"/>
                    </div>
                    <div className="row">
                        <div className="col-6 carImg">
                            <img src="../images/Main/car/4.png"/>
                        </div>
                        <div className="col-6">
                            <p className="titleCar">Ходовая часть</p>
                            <p className="bodyCar">Проверяем плавность хода во время поездки, выявляем посторонние шумы, стуки.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 carImg">
                            <img src="../images/Main/car/5.png"/>
                        </div>
                        <div className="col-6">
                            <p className="titleCar">Компьютерная диагностика</p>
                            <p className="bodyCar">Находим следы корректировки пробега. ошибки электронных систем и блоков.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 carImg">
                            <img src="../images/Main/car/6.png"/>
                        </div>
                        <div className="col-6">
                            <p className="titleCar">Юридическая чистота</p>
                            <p className="bodyCar">Проверка по всем базам на угон, арест, залоги, ограничение на регистрационные действия.</p>
                        </div>
                    </div>
                    <div className="Feedback">
                        <div className="container">
                        <p className="title">
                            Найдем автомобиль для вас
                        </p>
                        <div className="inp">
                            <p>Ваше имя</p>
                            <input  placeholder="Иван Иванов"/>
                        </div>
                        <div className="inp">
                            <p>Ваше имя</p>
                            <input placeholder="+7 (___) __ - __ - ___"/>
                        </div>
                        <div>
                            <button type="button" className="bat">Получить консультацию</button>
                        </div>
                        <div className="text">
                            <p>При отправке данных вы соглашаетесь на <span>обработку персональных данных</span></p>
                        </div>
                        </div>
                    </div>
                    <div className="work">
                    <p className="title">
                        Примеры нашей работы
                    </p>
                        <img className="workImg" src="../images/Main/work/car.png"/>
                        <p className="Name">Toyota Land Cruiser 300</p>
                        <p className="year">2003 год выпуска</p>
                        <p className="sellerPrice">Цена продавца: 1 900 000 руб</p>
                        <p className="afterTheAuction">После торга: 1 700 000 руб.</p>
                        <p className="task"><b>Задача:</b> Найти автомобиль с заданными параметрами, подходящий потенциальному покупателю. Найти автомобиль с заданными параметрами, подходящий потенциальному покупателю.  </p>
                        <p className="result"><b>Результат:</b><br/>
                            - Автомобиль в хорошем техническом и внешнем состоянии
                            - По кузову присутствуют несколько вторичных окрасов (до 300 мкр), был небольшой ремонт задних арок (до 500 мкр).
                            - В работе ДВС посторонние звуки отсутствуют
                            - АКПП переключает без рывков и пинков
                            - Тест-драйв и подвеска без замечаний
                            - Салон в прекрасном состоянии, чистый, не затертый
                            - Комплектация INVITE+
                            - Рекомендовано пройти плановое ТО на 250 000 км с заменой всех жидкостей, поменять датчик кислорода.
                        </p>
                    </div>
                    <div className="workSlayder">
                        <img src="../images/Main/work/car.png"/>
                        <div className="but">
                            <div className="blackLine">
                                <div className="lineFlex">
                            <div className="col">
                                <p className="name">Toyota Land Cruiser 300</p>
                                <p className="nameBody">400 000 руб., 2003 г.</p>
                            </div>
                                <div className="">
                                    <button className="yellow"><h5>Смотреть</h5></button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="but">
                            <div className="blackLine">
                                <div className="lineFlex">
                                    <div className="col">
                                        <p className="name">Toyota Land Cruiser 300</p>
                                        <p className="nameBody">400 000 руб., 2003 г.</p>
                                    </div>
                                    <div className="">
                                        <button className="yellow"><h5>Смотреть</h5></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feedback">
                        <p className="title">
                            Отзывы клиетов
                        </p>
                        <div className="">
                            <img className="workImg" src="../images/Main/feedback/yandex.svg"/>
                            <p className="body">Более 45 отзывов на Яндекс
                                со средней оценкой 5.0</p>
                        </div>
                        <div className="">
                            <img className="workImg" src="../images/Main/feedback/vk.svg"/>
                            <p className="body">Более 1200 положительных отзывов в группе ВКонтакте</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whiteBlock">
                <div className="container">
                    <div className="stages">
                        <p className="title">
                            Этапы подбора автомобиля
                        </p>
                        <div className="block">
                            <img src="../images/Main/podbor/01.png" />
                            <div className="blockText col">
                                <p className="title">
                                    Обращение в<br/>Честный автоподбор
                                </p>
                                <div className="body">
                                    <p>Вы оставляете заявку на сайте или звоните на номер<br/>
                                        <span className="namber">+7 (999) 200 93 30.</span>
                                    </p>
                                    <p>
                                        Мы обсуждаем ваши желания и вопросы. Даем свои рекомендации, отталкиваясь от ситуации на рынке. Договариваемся о стоимости автомобиля.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src="../images/Main/podbor/02.png" />
                            <div className="blockText col">
                                <p className="title">
                                    Договор и предоплата
                                </p>
                                <div className="body">
                                    <p>Вы посещаете наш офис, либо оставляете паспортные данные и подписываете договор удаленно. Вносите задаток 50% от общей суммы. Остальное оплачивается после того, как автомобиль будет подобран. Работаем официально, с предоставлением чеков об оплате услуг.
                                    </p>

                                </div>
                            </div>
                        </div>
                    <div className="block">
                        <img src="../images/Main/podbor/03.png" />
                        <div className="blockText col">
                            <p className="title">
                                Поиск автомобиля
                            </p>
                            <div className="body">
                                <p>
                                    Мы мониторим рынок с помощью специализированных программ и анализируем предложения. Получаем информацию о свежих поступлениях авто со всех официальных автосалонов, из закрытых баз, напрямую от собственников. Среднее время поиска - 10 дней
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <img src="../images/Main/podbor/04.png" />
                        <div className="blockText col">
                            <p className="title">
                                Юридическая проверка автомобиля
                            </p>
                            <div className="body">

                                <p>
                                    Проверяем работали ли бывшие владельцы автомобиля в такси. Сверяем были ли случаи ДТП, угона, запрета на регистрацию, ВИН и гос. номера. Сообщаем вам о найденных вариантах авто, согласовываем выбор, исходя из ваших пожеланий.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <img src="../images/Main/podbor/05.png" />
                        <div className="blockText col">
                            <p className="title">
                                Техническая проверка и тест-драйв
                            </p>
                            <div className="body">
                                <p>
                                    Если автомобиль вам понравился, мы встречаемся с продавцом. Осматриваем все основные узли и системы машины с использованием специализированного оборудования. Предоставляем вам фото и видео отчет об авто.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <img src="../images/Main/podbor/06.png" />
                        <div className="blockText col">
                            <p className="title">
                                Сделка и оформление документов на авто
                            </p>
                            <div className="body">
                                <p>
                                    Торгуемся с продавцом. Для клиентов, которые не могут оперативно приехать и купить машину, мы можем забронировать автомобиль на 2-3 дня. Помогаем оформить документы на автомобиль и поставить его на учет в ГИБДД.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="blackBlock">
              <div className="container">
                  <div className="row m-0 justify-content-center">
                  <div className="title">Предоставляем гарантию</div>

                  <div className="warrantyFree">
                      <div className="marg">
                      <div className="envelopePos">
                    <div className="free col-7">
                        <h3>Бесплатно</h3>
                    </div>
                      <div className="blockBody">
                        <h5 className="title">Вернем<span className="gold"> 20 000 ₽</span>в<br/>течении <span className="white">14 дней</span></h5>
                    <div className="row">
                        <div className="col-1">
                            <img src="../images/Main/podbor/Ellipse.svg"/>
                        </div>
                        <div className="col ellipse">Вернем деньги за наши услуги или <b>бесплатно</b> отремонтируем авто</div>
                    </div>
                          <div className="body">
                              Бесплатно отремонтируем авто в случае, если при проверке мы не смогли выявить неисправность автомобиля. Сумма компенсации, или ремонта не может превышать стоимость заказанных услуг по подбору авто.
                          </div>
                      </div>
                  </div>
                  </div>
                      <img className="envelope" src="../images/Main/ProvidingGuarantee/envelope.svg"/>
                  </div>

                      <div className="warrantyFree">
                          <div className="marg">
                              <div className="envelopePos">
                                  <div className="free col-7">
                                      <h3>Бесплатно</h3>
                                  </div>
                                  <div className="blockBody">
                                      <h5 className="title">Вернем<span className="gold"> 20 000 ₽</span>в<br/>течении <span className="white">14 дней</span></h5>
                                      <div className="row">
                                          <div className="col-1">
                                              <img src="../images/Main/podbor/Ellipse.svg"/>
                                          </div>
                                          <div className="col ellipse">Вернем деньги за наши услуги или <b>бесплатно</b> отремонтируем авто</div>
                                      </div>
                                      <div className="body">
                                          Бесплатно отремонтируем авто в случае, если при проверке мы не смогли выявить неисправность автомобиля. Сумма компенсации, или ремонта не может превышать стоимость заказанных услуг по подбору авто.
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <img className="envelope" src="../images/Main/ProvidingGuarantee/envelope.svg"/>
                      </div>

              </div>
              </div>
            </div>
        </div>
    );
};

export default Main;
