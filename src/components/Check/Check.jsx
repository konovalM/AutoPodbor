import React from 'react';
import body from '../../assets/images/check/body.png'
import computer from '../../assets/images/check/computer.png'
import kpp from '../../assets/images/check/kpp.png'
import engine from '../../assets/images/check/engine.png'
import lawyer from '../../assets/images/check/lawyer.png'
import running from '../../assets/images/check/running.png'
import {CheckCard} from "../cards/checkCard";



export const Check = () => {
    return (
        <div style={{background:"black"}}>
            <CheckCard
                src={body}
                title={"Кузов"}
                text={"Выявляем факты скрытого ДТП, ремонта, нарушения геометрии, окраса, снятия-установки элементов."}

            />
            <CheckCard
                src={engine}
                title={"Двигатель"}
                text={"Ищем течи, проводим замер компрессии, осматриваем внутренности двигателя эндоскопом."}
                isReversed={true}
            />
        </div>
    );
};

