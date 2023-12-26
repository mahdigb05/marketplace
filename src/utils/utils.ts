import {twMerge} from "tailwind-merge";
import {ClassValue, clsx} from "clsx";

export function objectToQueryString<T extends Object>(obj : T) {
    const params = new URLSearchParams();

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            params.append(key, String(obj[key]));
        }
    }

    return params.toString();
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}