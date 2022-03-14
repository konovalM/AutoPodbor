import React from 'react';

const Modal = () => {
    return (
        <div className="modals">
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">Остались<br/>вопросы?</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img className='X' src="../images/X.svg"/></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div><span className="text">Позвоните нам</span></div>
                                <div><span className="number">+7 (999) 200-93-30</span></div>
                                <div><span  className="text">или заполните заявку на бесплатную консультацию</span></div>
                            </div>
                            <div className="inp">
                                <p>Ваше имя</p>
                                <input  placeholder="Иван Иванов"/>
                            </div>
                            <div className="inp">
                                <p>Ваше имя</p>
                                <input placeholder="+7 (___) __ - __ - ___"/>
                                <p>При отправке данных вы соглашаетесь на <span>обработку персональных данных</span></p>
                            </div>
                        </div>
                        <div className="modal-footer row justify-content-center">
                            <button type="button" className="bat">Получить консультацию</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
