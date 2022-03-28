import React, {useState} from 'react';
import styles from './FromBlock.module.scss'
import {FullFormWrapper} from "../UI/Forms";
import square from "../../assets/images/modal/square.png";
import {useModalContext} from "../../contexts/ModalContext";
import {CustomForm} from "../UI/Forms/CustomForm";
import {postFeedback} from "../../api/feedbackAPI";
import cn from "classnames";
import bcgImg from '../../assets/images/form/formFon.png'


const FirstStep = ({onUploadPosts}) => {
    return (
        <>
            <section className={styles.modal}>
                <h3 className={styles.title}>
                    Найдем автомобиль для вас
                </h3>
                <CustomForm isRow={true} upload={(values)=>onUploadPosts(values)}/>
            </section>
        </>
    )
}


export const SecondStep = ({wrapper}) => {
    return (
        <>

            <section className={cn(styles.modal,wrapper)}>
                <h3 className={styles.title}>
                    Спасибо, мы скоро с вами<br/> свяжемся!
                </h3>
                <p className={styles.simpleText}>
                    А пока что вы можете познакомиться с нашей группой <span
                    className={styles.href}>ВКонтакте</span> и каналом на <span
                    className={styles.href}>YouTube</span>
                </p>
            </section>
        </>
    )
}


export const FormBlock = ({style}) => {
    const [count,setCount] = useState(1)

    const onUploadPosts = (body) => {
        (async ()=>{
            await postFeedback(body)
        })()
        setCount(2)
    }

    return (
        <div className={styles.padding} style={style}>
            <img src={bcgImg} />
            {count === 1?
                <FirstStep onUploadPosts={onUploadPosts}/>
                :
                <SecondStep/>
            }
        </div>
    );
};

