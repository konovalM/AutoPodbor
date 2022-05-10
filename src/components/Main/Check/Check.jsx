import React from "react";
import body from "../../../assets/images/check/body.png";
import computer from "../../../assets/images/check/computer.png";
import kpp from "../../../assets/images/check/kpp.png";
import engine from "../../../assets/images/check/engine.png";
import lawyer from "../../../assets/images/check/lawyer.png";
import running from "../../../assets/images/check/running.png";
import { CheckCard } from "../../cards/checkCard";
import styles from "./Check.module.scss";
import cn from "classnames";
import carInMeddle from "../../../assets/images/check/carInMeddle.png";
import carInMiddleMobile from "../../../assets/images/carInTheCenter.png";
import { AnimateWrapper } from "../../animateWrapper";

const CheckDesktop = () => {
  return (
    <div className={styles.desktop}>
      {/*<img src={carInMeddle} alt={"carInMeddle"} className={styles.car} />*/}
      <div className={cn(styles.row, styles.first)}>
        <AnimateWrapper animate={"fade-left"}>
          <CheckCard
            src={body}
            title={"Кузов"}
            text={
              "Выявляем факты скрытого ДТП, ремонта, нарушения геометрии, окраса, снятия-установки элементов."
            }
            num='1'
          ></CheckCard>
        </AnimateWrapper>
        <AnimateWrapper animate={"fade-right"}>
          <CheckCard
            src={engine}
            title={"Двигатель"}
            text={
              "Ищем течи, проводим замер компрессии, осматриваем внутренности двигателя эндоскопом."
            }
            isReversed={true}
            num='2'
          />
        </AnimateWrapper>
      </div>
      <div className={cn(styles.row, styles.second)}>
        <AnimateWrapper animate={"fade-left"}>
          <CheckCard
            src={kpp}
            title={"КПП"}
            text={
              "Тестируем корректность переключения скоростей, проводим тест-драйв, смотрим  наличие шумов, вибраций."
            }
            num='3'
          />
        </AnimateWrapper>

        <AnimateWrapper animate={"fade-right"}>
          <CheckCard
            src={running}
            title={"Ходовая часть"}
            text={
              "Проверяем плавность хода во время поездки, выявляем посторонние шумы, стуки."
            }
            isReversed={true}
            num='4'
          />
        </AnimateWrapper>
      </div>
      <div className={cn(styles.row, styles.third)}>
        <AnimateWrapper animate={"fade-left"}>
          <CheckCard
            src={computer}
            title={"Компьютерная диагностика"}
            text={
              "Находим следы корректировки пробега. ошибки электронных систем и блоков."
            }
            num='5'
          />
        </AnimateWrapper>

        <AnimateWrapper animate={"fade-right"}>
          <CheckCard
            src={lawyer}
            title={"Юридическая чистота"}
            text={
              "Проверка по всем базам на угон, арест, залоги, ограничение на регистрационные действия."
            }
            isReversed={true}
            num='6'
          />
        </AnimateWrapper>
      </div>
    </div>
  );
};

const CheckMobile = () => {
  return (
    <div className={styles.mobile}>
      <div className={styles.column}>
        <CheckCard
          src={body}
          title={"Кузов"}
          text={
            "Выявляем факты скрытого ДТП, ремонта, нарушения геометрии, окраса, снятия-установки элементов."
          }
          isReversed={false}
            num='1'
        />
        <CheckCard

          src={engine}
          title={"Двигатель"}
          text={
            "Ищем течи, проводим замер компрессии, осматриваем внутренности двигателя эндоскопом."
          }
          isReversed={true}
          num='2'
        />
        <CheckCard
            num='3'
          src={kpp}
          title={"КПП"}
          text={
            "Тестируем корректность переключения скоростей, проводим тест-драйв, смотрим  наличие шумов, вибраций."
          }
          isReversed={false}
        />
      </div>
      <div className={styles.ellipse}>
        <img
          src={carInMiddleMobile}
          alt={"carInMeddle"}
          className={styles.carMobile}
        />
      </div>
      <div className={styles.column}>
        <CheckCard
          src={running}
          title={"Ходовая часть"}
          text={
            "Проверяем плавность хода во время поездки, выявляем посторонние шумы, стуки."
          }
          isReversed={true}
          num='4'
        />
        <CheckCard
            num={'Hello'}
            src={computer}
            title={"Компьютерная диагностика"}
            text={
            "Находим следы корректировки пробега. ошибки электронных систем и блоков."
            }
            isReversed={false}
            num='5'
        />
        <CheckCard
          src={lawyer}
          title={"Юридическая чистота"}
          text={
            "Проверка по всем базам на угон, арест, залоги, ограничение на регистрационные действия."
          }
          isReversed={true}
          num='6'
        />
      </div>
    </div>
  );
};

export const Check = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Что проверяем в машине</h2>
      <div className={styles.content}>
        <CheckDesktop />
        <CheckMobile />
      </div>
    </div>
  );
};
