import React from 'react';
import {Questions} from "../../components/Questions";
import {Choice} from "../../components/choice";
import {ServicesAndPrices} from "../../components/servicesAndPrices";
import {Problems} from "../../components/problems";
import {Check} from "../../components/Check";
import {Form} from "../../components/Form";
import {Examples} from "../../components/Examples";
import {Maps} from "../../components/Map";
import {Promo} from "../../components/promo";

export const Main = () => {
    return (
        <>
            <Promo/>

            <Choice/>
            <ServicesAndPrices/>
            <Questions/>

            <Problems/>
            <Check/>
            <Form/>
            <Examples/>
            <Maps/>
        </>
    );
};

