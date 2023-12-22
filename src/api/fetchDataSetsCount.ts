import { DataObject } from "../types";

export async function fetchDataSetsCount() {
        const response = await fetch(
            `https://aendevlakehouse:4000/dpf_data/v1/foundry/datasets/count`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
            const data : DataObject[] = await response.json();
            return data;
        }else throw new Error("Could not retrieve data sets count");
}
