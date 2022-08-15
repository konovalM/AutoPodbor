import React, {useState} from 'react';
import styles from './FormCalculator.module.css'
import cn from "classnames";
import Select from "react-select";
import {Button} from "../UI/button";

const ownerOptions = [
    { value: '1', label: 'Физическое лицо' },
    { value: '2', label: 'Юридическое лицо' },
]

const ageOptions = [
    { value: '1', label: 'До 3 лет' },
    { value: '2', label: 'От 3 до 5 лет' },
    { value: '3', label: 'От 5 до 7 лет' },
    { value: '4', label: 'Более 7 лет' },
]

const engineOptions = [
    { value: '1', label: 'Бензиновый' },
    { value: '2', label: 'Дизельный' },
    { value: '3', label: 'Гибридный' },
    { value: '4', label: 'Электрический' },
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
        }
    }),
    container: (provided, state ) => ({
        ...provided,
        overflow: 'hidden',
        zIndex:  state.selectProps.menuIsOpen ? '100' : 'auto',
        border: '1px solid #4B4A4A',
        borderRadius: '11px',
        position: 'relative',
        background: '#ffffff',
        paddingBottom: state.selectProps.menuIsOpen ? '10px' : '0',
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
    menuPortal: (provided) => ({
        ...provided,
        borderRadius: '11px',
    }),
    singleValue: (provided) => ({
        ...provided,
        margin: 0,
        padding: '22px 30px',
        color: '#121212',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '125%',
    })
}

const FormCalculator = () => {

    return (
        <form className={styles.form}>
            <div className={styles.calcWrapper}>
                <div className={cn(styles.leftInputs, styles.column)}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.label}>Автомобиль ввозит</div>
                        <Select
                            options={ownerOptions}
                            styles={customStyles}
                            defaultValue={ownerOptions[0]}
                            isSearchable={false}
                            aria-live='off'
                            className={styles.select}
                            // menuIsOpen={true}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <div className={styles.label}>Возраст автомобиля</div>
                        <Select
                            options={ageOptions}
                            styles={customStyles}
                            defaultValue={ageOptions[0]}
                            isSearchable={false}
                            aria-live='off'
                            className={styles.select}
                            // menuIsOpen={true}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <div className={styles.label}>Тип двигателя</div>
                        <Select
                            options={engineOptions}
                            styles={customStyles}
                            defaultValue={engineOptions[0]}
                            isSearchable={false}
                            aria-live='off'
                            className={styles.select}
                        />
                    </div>
                </div>
                <div className={cn(styles.rightInputs, styles.column)}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.label}>Мощность двигателя</div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <div className={styles.label}>Объем двигателя в см3 (1 л = 1000 см3)</div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <div className={styles.label}>Стоимость автомобиля</div>
                    </div>
                </div>
            </div>
            <Button text={'Рассчитать'} className={styles.btn}/>
        </form>
    );
};

export default FormCalculator;