import {api} from "./axios";

// need to change "/blog" on "/catalog"
export const getCatalogItems = async (page=1,objectCount = 12) => {
    return await api.get("/blog/",{
        params:{
            page,
            objectCount
        }
    }).then(res=>res.data)
}