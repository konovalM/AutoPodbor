import {api} from "./axios";

export const getCatalogItems = async (page = 1, objectCount = 12, filter = null) => {
    if (filter) {
        return await api.get("/catalog/", {
            params: {
                page,
                objectCount,
                ...filter
            }
        }).then(res => res.data)
    }

    return await api.get("/catalog/", {
        params: {
            page,
            objectCount,
        }
    }).then(res => res.data)

}

export const getCatalogItem = (id) => {
    return api.get(`/catalog/${id}/`).then(res => res.data)
}