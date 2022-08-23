import React, {useState} from 'react';
import styles from './FormCalculator.module.css'
import cn from "classnames";
import Select from "react-select";
import {Button} from "../UI/button";
import {Field, Form, Formik} from "formik";
import {NamedInput} from "../UI/inputs";
import {FormSelect} from "react-bootstrap";
import {CalcSchema} from "../UI/Forms/Schemas";
import {calcCustomsClearance} from "../../api/calculatorAPI";

const ownerOptions = [
    {value: '1', label: 'Физическое лицо'},
    {value: '2', label: 'Юридическое лицо'},
]

const ageOptions = [
    {value: '0-3', label: 'До 3 лет'},
    {value: '3-5', label: 'От 3 до 5 лет'},
    {value: '5-7', label: 'От 5 до 7 лет'},
    {value: '7-0', label: 'Более 7 лет'},
]

const engineOptions = [
    {value: '1', label: 'Бензиновый'},
    {value: '2', label: 'Дизельный'},
    {value: '3', label: 'Гибридный'},
    {value: '4', label: 'Электрический'},
]

const powerOptions = [
    {value: '1', label: 'ЛС'},
    {value: '2', label: 'кВт'},
]

const currencyOptions = [
    {value: 'eur', label: 'EUR'},
    {value: 'usd', label: 'USD'},
    {value: 'rub', label: 'RUB'},
]

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: '#FFF',
        padding: '22px 30px',
        color: '#121212',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '125%',
        display: state.isSelected ? 'none' : 'block',
        background: state.isSelected ? '#DCDCDC' : '#FFFFFF',
        '&:hover': {
            background: '#E7E7E7',
        },
        '@media only screen and (max-width: 370px)': {
            padding: '22px 0 22px 9px'
        }
    }),
    container: (provided, state) => ({
        ...provided,
        overflow: 'hidden',
        zIndex: state.selectProps.menuIsOpen ? '100' : 'auto',
        border: '1px solid #4B4A4A',
        borderRadius: '11px',
        position: 'relative',
        background: '#ffffff',
        paddingBottom: state.selectProps.menuIsOpen ? '10px' : '0',
        width: '100%',
    }),
    control: (provided, state) => ({
        ...provided,
        border: 'none',
        borderColor: '#4B4A4A',
        boxShadow: 'none',
        borderRadius: '11px',
        width: '100%',
    }),
    indicatorSeparator: (provided) => ({
        display: 'none',
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: 0,
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        paddingRight: '30px',
        color: '#121212',
        '&:hover': {
            color: '#121212',
        }
    }),
    menu: (provided) => ({
        ...provided,
        margin: '-1px',
        width: '100%',
        transform: 'translateX(1px)',
        border: 'none',
        borderTop: 'none',
        borderRadius: '11px',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        boxShadow: 'none',
        position: 'static',
    }),
    menuList: (provided) => ({
        ...provided,
        margin: 0,
        padding: 0,

    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        padding: 0,
        '& > div': {
            padding: 0,
            paddingRight: '30px',
        }
    }),
    menuPortal: (provided) => ({
        ...provided,
        borderRadius: '11px',
    }),
    singleValue: (provided) => ({
        ...provided,
        margin: 0,
        padding: '22px 0 22px 30px',
        color: '#121212',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '125%',
        '@media only screen and (max-width: 370px)': {
            padding: '22px 0 22px 9px'
        }
    })
}

const FormCalculator = () => {
    const [calculatedData, setCalculatedData] = useState(null)
    return (
        <Formik
            initialValues={{
                owner: '1',
                age: '0-3',
                engine: '1',
                power: '',
                power_unit: '1',
                value: '',
                price: '',
                currency: 'eur',
            }}
            validateOnChange={true}
            validateOnBlur={true}
            validationSchema={CalcSchema}
            onSubmit={(values) => {
                console.log(JSON.stringify(values))
                calcCustomsClearance(values)
                    .then(setCalculatedData)
            }}
        >
            {({errors, touched}) => (
                <Form className={styles.form}>
                    <div className={styles.calcWrapper}>
                        <div className={cn(styles.leftInputs, styles.column)}>
                            <div className={styles.inputWrapper}>
                                <div className={styles.label}>Автомобиль ввозит</div>
                                <Field
                                    name={'owner'}
                                    component={FormikSelect}
                                    options={ownerOptions}
                                />
                            </div>
                            <div className={styles.inputWrapper}>
                                <div className={styles.label}>Возраст автомобиля</div>
                                <Field
                                    component={FormikSelect}
                                    options={ageOptions}
                                    name={'age'}
                                />
                            </div>
                            <div className={styles.inputWrapper}>
                                <div className={styles.label}>Тип двигателя</div>
                                <Field
                                    component={FormikSelect}
                                    options={engineOptions}
                                    name={'engine'}
                                />
                            </div>
                        </div>
                        <div className={cn(styles.rightInputs, styles.column)}>
                            <div className={styles.inputWrapper}>
                                <div className={styles.label}>Мощность двигателя</div>
                                <div className={styles.inputFlex}>
                                    <Field
                                        name="power"
                                        as={Input}
                                    />
                                    <Field
                                        component={FormikSelect}
                                        options={powerOptions}
                                        name={'power_unit'}
                                    />
                                </div>
                                {errors.power && touched.power
                                    &&
                                    <div className={styles.error}>{errors.power}</div>}
                            </div>
                            <div className={styles.inputWrapper}>
                                <div className={styles.label}>Объем двигателя в см3 (1 л = 1000 см3)</div>
                                <Field
                                    name="value"
                                    as={Input}
                                    className={styles.input}
                                />
                                {errors.value && touched.value
                                    &&
                                    <div className={styles.error}>{errors.value}</div>}
                            </div>
                            <div className={styles.inputWrapper}>
                                <div className={styles.label}>Стоимость автомобиля</div>
                                <div className={styles.inputFlex}>
                                    <Field
                                        name="price"
                                        as={Input}
                                    />
                                    <Field
                                        component={FormikSelect}
                                        options={currencyOptions}
                                        name={'currency'}
                                    />
                                </div>
                                {errors.price && touched.price
                                    &&
                                    <div className={styles.error}>{errors.price}</div>}
                            </div>
                        </div>
                    </div>
                    {
                        calculatedData &&
                        <div className={styles.calculatedGrid}>
                            <div className={styles.lineFlex}>
                                <div className={cn(styles.text, styles.usualText)}>Сбор:</div>
                                <div className={cn(styles.money, styles.usualText)}>{calculatedData.sbor} руб.</div>
                            </div>
                            <div className={styles.lineFlex}>
                                <div className={cn(styles.text, styles.usualText)}>Таможенная пошлина:</div>
                                <div className={cn(styles.money, styles.usualText, styles.flexSpan)} ><span>{calculatedData.tax} руб.</span> <span className={styles.span} dangerouslySetInnerHTML={{__html: calculatedData.tax_k}}></span></div>
                            </div>
                            <div className={styles.lineFlex}>
                                <div className={cn(styles.text, styles.usualText)}>Утилизационный сбор:</div>
                                <div className={cn(styles.money, styles.usualText, styles.flexSpan)}><span>{calculatedData.util} руб.</span> <span className={styles.span} dangerouslySetInnerHTML={{__html: calculatedData.util_k}}></span></div>
                            </div>
                            <div className={styles.lineFlex}>
                                <div className={cn(styles.text, styles.lastText)}>Итого:</div>
                                <div className={cn(styles.money, styles.lastText)}>{calculatedData.total} руб.</div>
                            </div>
                        </div>
                    }
                    <Button text={'Рассчитать'} className={styles.btn}/>
                </Form>
            )}
        </Formik>

    );
};

const FormikSelect = ({options, field, form}) => {
    return (
        <Select
            name={field.name}
            options={options}
            styles={customStyles}
            defaultValue={options[0]}
            onChange={(option) => form.setFieldValue(field.name, option.value)}
            isSearchable={false}
            aria-live='off'
            className={styles.select}
        />
    )
}

const Input = ({...props}) => {
    return (
        <input type='number' className={cn(styles.shortInput, styles.input)} {...props}></input>
    )
}
export default FormCalculator;