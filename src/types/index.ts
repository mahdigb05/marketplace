export interface DataObject {
    object : {
        apiName: string,
            displayName: string,
            status: "EXPERIMENTAL" | "ACTIVE",
            visibility: "NORMAL",
            description: string,
            primaryKey: string[]
            "rid": string
    }
    metadata : {
        producers : string[] | null
    } | null;
}

export interface SearchResponse{
    dataObjects : DataObject[];
    page : number;
    size : number;
    total : number;
    pages : number;
}

export interface FilterSettings {
    category?: string;
    producer?: string;
    status?: string;
}