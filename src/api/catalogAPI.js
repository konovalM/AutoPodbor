import {api} from "./axios";

const filterOptions = [
    {
        min_price: 1200000,
        max_price: 1300000,
    },
    {
        min_price: 1300000,
        max_price: 2000000,
    },
    {
        min_price: 2000000,
    },
]

// need to change "/blog" on "/catalog"
export const getCatalogItems = async (page=1,objectCount = 12, filter) => {
    if (!isNaN(filter)){
        console.log('test')
        return await api.get("/catalog/",{
            params:{
                page,
                objectCount,
                ...filterOptions[filter]
            }
        }).then(res=>res.data)
    }

    return await api.get("/catalog/",{
        params:{
            page,
            objectCount,
        }
    }).then(res=>res.data)

}

export const getCatalogItem = (id) => {
    return api.get(`/catalog/${id}/`).then(res=>res.data)
}