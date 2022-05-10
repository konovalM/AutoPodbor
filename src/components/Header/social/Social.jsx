import React from 'react';
import vk from '../../../assets/images/vk.svg'
import whatsApp from '../../../assets/images/whatsup.svg'
import telegram from '../../../assets/images/tg.svg'
import styles from './Social.module.scss'
import {ExternalLink} from '../../UI/externalLink'



export const Social = () => {
    return (
        <div className={styles.content}>
            <ExternalLink href={"https://wa.me/+79992009330"}>
                <img src={whatsApp} alt={"whatsApp"}/>
            </ExternalLink>
            <ExternalLink href={"https://t.me/Sergey_Petlyak"}>
                <img src={telegram} alt={"telegram"}/>
            </ExternalLink>
            <ExternalLink href={"https://vk.com/spb_avto_podbor"}>
                <img src={vk} alt={"vk"}/>
            </ExternalLink>
        </div>
    );
};

