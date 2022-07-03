import {api} from "./axios";

export const getInfo = async () => {
    return await api.get("/info/").then(res=> res.data)
}