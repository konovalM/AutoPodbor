import axios from "axios";


export const api = axios.create({
    baseURL:"https://avtopodbor-spb.pro/api/",
    headers:{
        "Content-Type": "application/json"
    }
})