import {api} from "./axios";

export const getFilterRanges = async () => {
    return await api.get("/catalog_filter_ranges/").then(res => res.data)
}
