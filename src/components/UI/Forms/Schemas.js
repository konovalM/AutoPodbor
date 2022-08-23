import * as Yup from 'yup'

const validatePower = (value) => {
    return !(value * 10 % 1)
}

export const FeedbackSchemas = Yup.object().shape({
    full_name: Yup.string().matches(/[a-zA-Zа-яА-Я]+/,"Введите на русском языке")
        .min(3, 'Заполните полностью поле')
        .required('Обязательное поле'),
});

export const CalcSchema = Yup.object().shape({
    value: Yup.number().min(1, 'Невалидное значение').integer('Целое число').required('Обязательное поле'),
    power: Yup.number().min(1, 'Невалидное значение').required('Обязательное поле').test(true, '1 цифра после запятой', (value) => validatePower(value)),
    price: Yup.number().positive('Стоимость положительна').required('Обязательное поле'),
})

