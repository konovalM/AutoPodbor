import React from 'react';
import styles from "./AnimateButton.module.css";
import TelegramIcon from "../../icons/TelegramIcon";
import cn from "classnames";

export const AnimateButton = ({text, isLight = false}) => {
    return (
        <>
            {
                isLight ?
                    <a className={cn(styles.button, styles.buttonLight)} href={'https://t.me/autosha_bot'} target="_blank" rel="noreferrer">
                        <div className={cn(styles.btnWrapper, styles.btnWrapperLight)}>
                            <div className={cn(styles.btnInner, styles.btnInnerLight)}>
                                <span className={styles.text}>
                                    {text}
                                </span>
                                <div className={styles.iconWrapperLight}>
                                    <TelegramIcon color={'#FFFFFF'} className={cn(styles.icon, styles.iconLight)}/>
                                </div>
                            </div>
                        </div>
                    </a> :
                    <a className={styles.button} href={'https://t.me/autosha_bot'} target="_blank" rel="noreferrer">
                        <div className={styles.btnWrapper}>
                            <div className={styles.btnInner}>
                                {text}
                                <TelegramIcon className={styles.icon}/>
                            </div>
                        </div>
                    </a>
            }
        </>
    );
};

