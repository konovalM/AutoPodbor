import React, {useEffect, useState} from 'react';
import {Accordion} from "react-bootstrap";
import styles from './Questions.module.scss'
import {SecondStep} from "../../FormBlock/FormBlock";
import {postFeedback} from "../../../api/feedbackAPI";
import {FirstStep} from "./Form/Form";
import {getAccordions, getAccordionsAbroad} from "../../../api/accordionAPI";


const AccordionItem = ({header, body, eventKey}) => {
    return (
        <>
            <Accordion.Item eventKey={eventKey} className={styles.accordionItem}>
                <Accordion.Header>{header}</Accordion.Header>
                <Accordion.Body>
                    {body}
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}


const QuestionsExpanded = ({type}) => {
    const [quizes, setQuizes] = useState([])

    useEffect(() => {
        if (type) {
            (async () => {
                await getAccordionsAbroad().then(res => setQuizes(res))
            })()
        } else {
            (async () => {
                await getAccordions().then(res => setQuizes(res))
            })()
        }
    }, [])
    return (
        <>
            <Accordion className={styles.accordionContainer}>
                {quizes.map((quiz, index) => <AccordionItem
                    header={quiz.question}
                    body={quiz.answer}
                    key={index}
                    eventKey={index}
                />)}
            </Accordion>
        </>
    );
};


const AccordionBlock = ({type}) => {
    return (
        <div className={styles.quizBlock}>
            <h2 className={styles.quizTitle}>
                Часто задаваемые вопросы
            </h2>
            <QuestionsExpanded type={type}/>
        </div>
    )
}


export const Questions = ({type = null}) => {
    const [count, setCount] = useState(1)
    const onUploadPosts = (body) => {
        (async () => {
            await postFeedback({...body, type: type ? 'euro' : 'local'})
        })()
        setCount(2)
    }


    return (
        <section className={styles.wrapper}>
            <AccordionBlock type={type}/>

            {count === 1 ?
                <FirstStep onUploadPosts={onUploadPosts}/>
                :
                <SecondStep wrapper={styles.secondStepWrapper}/>
            }

        </section>
    )
}