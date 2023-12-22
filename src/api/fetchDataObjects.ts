import { DataObject } from "../types";
import { objectToQueryString } from "../utils/utils";

interface FetchDataObjectQueryParamas{
    page : number;
    size : number;
    visibility : "PROMINENT" | "NORMAL"
}

const defaultQuery : FetchDataObjectQueryParamas = {page : 1, size : 6, visibility:'PROMINENT'}

export async function fetchtDataObjects(queryParams : FetchDataObjectQueryParamas = defaultQuery) {
        const response = await fetch(
            `https://aendevlakehouse:4000/dpf_data/v1/foundry/data-objects?${objectToQueryString(queryParams)}`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
            const data : DataObject[] = (await response.json()).items;
            return data;
        }else throw new Error("Could not retrieve data objects.");
}
