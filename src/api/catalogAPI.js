import {api} from "./axios";

// need to change "/blog" on "/catalog"
export const getCatalogItems = async (page=1,objectCount = 12) => {
    return await api.get("/catalog/",{
        params:{
            page,
            objectCount
        }
    }).then(res=>res.data)
}

export const getCatalogItem = (id) => {
    return api.get(`/catalog/${id}/`).then(res=>res.data)
}