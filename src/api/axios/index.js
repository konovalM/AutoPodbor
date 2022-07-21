import axios from "axios";


export const api = axios.create({
    baseURL:"https://chestniy-autopodbor.ru/api/",
    headers:{
        "Content-Type": "application/json"
    }
})