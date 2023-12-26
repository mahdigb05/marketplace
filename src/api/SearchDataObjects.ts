import {SearchResponse} from "../types";
import {objectToQueryString} from "../utils/utils";

interface SearchQueryParamas {
    page?: number;
    size?: number;
    group?: string;
    query? : string;
     producer?: string;
    status?: "ACTIVE" | "EXPERIMENTAL" | "DEPRECATED"
    visibility?: "PROMINENT" | "NORMAL"
}

const defaultSearchQuery: SearchQueryParamas = {
    page: 1,
    size: 5,
    query : "",
}


export async function searchDataObjects(query: SearchQueryParamas = defaultSearchQuery) {
    const response = await fetch(
        `https://aendevlakehouse:4000/dpf_data/v1/foundry/search?${objectToQueryString(query)}`,
        {
            method: "POST",
        }
    );

    if (response.ok) {
        const responseData = await response.json();
        const data: SearchResponse = {
            dataObjects: responseData.items,
            page: responseData.pagination.page,
            total: responseData.pagination.total,
            size: responseData.pagination.size,
            pages: responseData.pagination.pages,
        }
        return data;
    } else throw new Error("Could not retrieve data objects count");
}
