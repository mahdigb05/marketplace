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