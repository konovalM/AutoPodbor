import {api} from "./axios";

export const calcCustomsClearance = async (values) => {
    return await api.post('/calc_customs_clearance/', {
        ...values
    }).then(res => (res.data))
}