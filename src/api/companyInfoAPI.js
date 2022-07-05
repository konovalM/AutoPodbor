import {api} from "./axios";

export const getCompanyInfo = async () => {
    return await api.get("/info/").then(res=>res.data)
}
