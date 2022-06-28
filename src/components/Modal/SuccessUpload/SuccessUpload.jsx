import styles from "./SuccessUpload.module.scss";
import React from "react";

export const SuccessUpload = () => {
    return (
        <>
            <section className={styles.modal}>
                <h3 className={styles.title}>
                    Спасибо, мы скоро с вами<br/> свяжемся!
                </h3>
                <p className={styles.simpleText}>
                    А пока что вы можете познакомиться с нашей группой <a
                    className={styles.href} style={{textDecoration: 'underline'}} href='https://vk.com/chestniy_autopodbor'>ВКонтакте</a>.
                </p>
            </section>
        </>
    )
}