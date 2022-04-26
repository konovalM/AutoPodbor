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
import carInMiddleMobile from "../../../assets/images/check/cardInMiddleMobile.png";
import { AnimateWrapper } from "../../animateWrapper";

const CheckDesktop = () => {
  return (
    <div className={styles.desktop}>
      <img src={carInMeddle} alt={"carInMeddle"} className={styles.car} />
      <div className={cn(styles.row, styles.first)}>
        <AnimateWrapper animate={"fade-left"}>
          <CheckCard
            src={body}
            title={"Кузов"}
            text={
              "Выявляем факты скрытого ДТП, ремонта, нарушения геометрии, окраса, снятия-установки элементов."
            }
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
          isReversed={true}
        />
        <CheckCard
          src={engine}
          title={"Двигатель"}
          text={
            "Ищем течи, проводим замер компрессии, осматриваем внутренности двигателя эндоскопом."
          }
          isReversed={true}
        />
        <CheckCard
          src={kpp}
          title={"КПП"}
          text={
            "Тестируем корректность переключения скоростей, проводим тест-драйв, смотрим  наличие шумов, вибраций."
          }
          isReversed={true}
        />
      </div>
      <div>
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
        />
        <CheckCard
          src={computer}
          title={"Компьютерная диагностика"}
          text={
            "Находим следы корректировки пробега. ошибки электронных систем и блоков."
          }
          isReversed={true}
        />
        <CheckCard
          src={lawyer}
          title={"Юридическая чистота"}
          text={
            "Проверка по всем базам на угон, арест, залоги, ограничение на регистрационные действия."
          }
          isReversed={true}
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
