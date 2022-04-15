import React from 'react';
import vk from '../../../assets/images/social/vk.png'
import whatsApp from '../../../assets/images/social/whatsup.png'
import youtube from '../../../assets/images/social/youTube.png'
import telegram from '../../../assets/images/social/telegram.png'
import instagram from '../../../assets/images/social/instagram.png'
import styles from './Social.module.scss'


export const Social = () => {
    return (
        <div className={styles.content}>
            <a href={"https://wa.me/+79992009330"}>
                <img src={whatsApp} alt={"whatsApp"}/>
            </a>
            <a href={"https://t.me/Sergey_Petlyak"}>
                <img src={telegram} alt={"telegram"}/>
            </a>
            <a href={"https://wa.me/+79992009330"}>
                <img src={vk} alt={"vk"}/>
            </a>
        </div>
    );
};

