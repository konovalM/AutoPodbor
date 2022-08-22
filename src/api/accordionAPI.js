import {api} from "./axios";

export const getAccordions = async () => {
    return await api.get("/faq/").then(res=>res.data)
}

export const getAccordionsAbroad = async () => {
    return await api.get("/euro-faq/").then(res=>res.data)
}