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
            <img src={whatsApp} alt={"whatsApp"}/>
            <img src={telegram} alt={"telegram"}/>
            <img src={vk} alt={"vk"}/>
            <img src={instagram} alt={"instagram"}/>
            <img src={youtube} alt={"youtube"}/>
        </div>
    );
};

