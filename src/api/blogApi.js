import {api} from "./axios";


export const getBlogPosts = async (page=1) => {
    return await api.get("/blog/",{
        params:{
            page
        }
    }).then(res=>res.data)
}


export const getBlogPost = (id) => {
    return api.get(`/blog/${id}/`).then(res=>res.data)
}


