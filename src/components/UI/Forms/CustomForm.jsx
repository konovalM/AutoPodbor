import React from 'react';
import {Formik, Field, Form} from 'formik';
import {FeedbackSchemas} from "./Schemas";
import {NamedInput, PhoneNumberInput} from "../inputs";
import styles from './Form.module.scss'
import {Button} from "../button";

function validateNumber(phoneNumber) {
    let error

    if (phoneNumber.replace("_", "").trim().length !== 18) {
        error = "Это еще не номер телефона"
    }
    return error;
}


export const CustomForm = ({isRow,upload}) => {

    return (
      <div>
        <Formik
          initialValues={{
            telephone: "",
            full_name: "",

          }}
          validationSchema={FeedbackSchemas}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={(values) => {
            upload(values);
            window.ym(88846653, 'reachGoal', 'form')
            return true;

          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div  className={isRow ? styles.rowInputs : ""}>
                <div>
                  <Field
                    name="full_name"
                    as={NamedInput}
                    placeholder={"Иванов Иван"}
                    label={"Ваше имя и фамилия"}
                    validate={(name)=>{
                      let error
                      if(name.trim().split(" ").length<2){
                        error = "Введите полные имя и фамилию"
                      }
                      return error
                    }}
                  />
                  {errors.full_name && touched.full_name ? (
                    <div className={styles.error}>{errors.full_name}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    name="telephone"
                    as={PhoneNumberInput}
                    label={"Ваш телефон"}
                    validate={validateNumber}
                  />
                  {errors.telephone && touched.telephone ? (
                    <div className={styles.error}>{errors.telephone}</div>
                  ) : null}
                </div>
              </div>
              <p className={styles.disclaimer}>
                При отправке данных вы соглашаетесь на{" "}
                <a href='/privacy' style={{textDecoration: 'underline', color: 'inherit'}}>
                  обработку персональных данных
                </a>
              </p>
              <Button
                type="submit"
                text={"Получить консультацию"}
                // className={styles.btn}
                className={`${styles.btn} g-recaptcha`}
                data-sitekey="6Lfu08UpAAAAABL-ya_0HEFeBpBVPyhRsXEC8v0W" 
                data-callback='onSubmit' 
                data-action='submit'
              />
            </Form>
          )}
        </Formik>
      </div>

    );
};
