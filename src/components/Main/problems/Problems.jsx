import React from 'react';
import styles from "./Problems.module.scss";
import {ProblemCard} from "../../cards/problemCard";
import delerships from "../../../assets/images/problems/delerships.jpg"
import dtp from "../../../assets/images/problems/dtp.jpg"
import vin from "../../../assets/images/problems/vin.jpg"
import mileage from "../../../assets/images/problems/mileage.jpg"
import layer from "../../../assets/images/problems/layer.jpg"
import speed from "../../../assets/images/problems/speed.jpg"
import men from "../../../assets/images/problems/men.png"
import cn from "classnames";
import ss from './long-svg.svg'
import { AnimateWrapper } from '../../animateWrapper';
import blue from './blue.jpg'
import pink from './pink.jpg'
export const Problems = () => {
    return (
      //   <div className={styles.problems}>
      // <img src={pink} className={styles.pink} alt="" />
      // <img src={blue} className={styles.blue} alt="" />

      <section className={styles.wrapper}>
        {/* <svg
          width="391"
          height="106"
          viewBox="0 0 391 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgTop}
        >
          <path
            d="M391 14.248C238.116 -25.1472 149.202 31.5168 0 14.248V106H391V14.248Z"
            fill="black"
          />
        </svg>
        <img src={ss} alt="" className={styles.svgTop} /> */}

        <AnimateWrapper animate={"fade-top"}>
          <h2 className={styles.title}>
            Проблемы при
            <br /> самостоятельной покупке
          </h2>
        </AnimateWrapper>

        <img src={men} alt={"men"} className={styles.men} />
        <div className={styles.content}>
          <div className={cn(styles.row, styles.first)}>
            <AnimateWrapper animate={"fade-right"}>
            <ProblemCard
              src={mileage}
              title={"Юридические проблемы"}
              text={
                "Кредитные, залоговые авто, двойники и “перебитые”, с запретами и ограничениями"
              }
              number={1}
            />
            </AnimateWrapper>
            <AnimateWrapper animate={"fade-left"}>
            <ProblemCard
              src={layer}
              title={"Восстановление после ДТП"}
              text={
                "Цена ремонта скрытых дефектов после ДТП может удвоить стоимость авто"
              }
              number={2}
            />
            </AnimateWrapper>
          </div>

          <div className={cn(styles.row, styles.second)}>
            <AnimateWrapper animate={"fade-right"}>{" "}
            <ProblemCard
              src={dtp}
              title={"Восстановление после ДТП"}
              text={
                "Цена ремонта скрытых дефектов после ДТП может удвоить стоимость авто"
              }
              number={3}
            />
            </AnimateWrapper>
            <AnimateWrapper animate={"fade-left"}>{" "}
            <ProblemCard
              src={vin}
              title={"Подмена VIN-номера"}
              text={
                "При подаче объявления указывают VIN-номер автомобиля-двойника"
              }
              number={4}
            />
            </AnimateWrapper>
          </div>
          <div className={cn(styles.row, styles.third)}>
            <AnimateWrapper animate={"fade-right"}>
            <ProblemCard
              src={delerships}
              title={"Серые автосалоны"}
              text={
                "При подаче объявления указывают VIN-номер автомобиля-двойника"
              }
              number={5}
            />
            </AnimateWrapper>
            <AnimateWrapper animate={"fade-left"}>{" "}
            <ProblemCard
              src={speed}
              title={`Перепрошитые "мозги"`}
              text={
                "Некачественная прошивка электроники выводит приборы из строя"
              }
              number={6}
            />
            </AnimateWrapper>
          </div>
        </div>
      </section>
      //   </div>
    );
};

