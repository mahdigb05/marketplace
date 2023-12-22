import { DataObject } from "../types";

export async function fetchNewestDataObjects() {
        const response = await fetch(
            `https://aendevlakehouse:4000/dpf_data/v1/foundry/data-objects/newest?number_of_results=3`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
            const data : DataObject[] = await response.json();
            return data;
        }else throw new Error("Could not retrieve recently created data objects.");
}
