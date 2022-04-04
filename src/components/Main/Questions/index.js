import React, {useState} from 'react';
import {Accordion} from "react-bootstrap";
import styles from './Questions.module.scss'
import {SecondStep} from "../../FormBlock/FormBlock";
import {postFeedback} from "../../../api/feedbackAPI";
import {FirstStep} from "./Form/Form";



const AccordionItem = ({header,body,eventKey}) => {
    return (
        <>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>{header}</Accordion.Header>
                <Accordion.Body >
                    {body}
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}


const QuestionsExpanded = () => {
    return (
        <>
            <Accordion className={styles.accordionContainer}>
                <AccordionItem
                header={"Какую машину можно взять за мой бюджет?"}
                body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.`}
                eventKey={"0"}
                />
                <AccordionItem
                    header={"Какие автомобили берете на подбор «под ключ»?"}
                    body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.`}
                    eventKey={"1"}
                />
                <AccordionItem
                    header={"Если я из другого города?"}
                    body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.`}
                    eventKey={"2"}
                />
                <AccordionItem
                    header={"Сколько времени занимает поиск авто?"}
                    body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.`}
                    eventKey={"3"}
                />
                <AccordionItem
                    header={"Где вы ищете автомобили?"}
                    body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.`}
                    eventKey={"4"}
                />
                <AccordionItem
                    header={"Вы поможете с оформлением документов?"}
                    body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.`}
                    eventKey={"5"}
                />
            </Accordion>
        </>
    );
};


const AccordionBlock = () => {
    return (
        <div className={styles.quizBlock}>
            <h2 className={styles.quizTitle}>
                Часто задаваемые вопросы
            </h2>
            <QuestionsExpanded/>
        </div>
    )
}






export const Questions = () => {
    const [count,setCount] = useState(1)
    const onUploadPosts = (body) => {
        (async ()=>{
            await postFeedback(body)
        })()
        setCount(2)
    }
    return (
        <section className={styles.wrapper}>
            <AccordionBlock/>

                {count === 1?
                    <FirstStep onUploadPosts={onUploadPosts}/>
                    :
                    <SecondStep wrapper={styles.secondStepWrapper}/>
                }

        </section>
    )
}