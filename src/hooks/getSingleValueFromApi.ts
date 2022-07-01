import { useState } from "react";

export function getSingleValueFromApi(id: string | null, key: string): string {

    const api = `/api/apartment/`
    const [value, setValue] = useState("");

    (async (): Promise<void> => {
        try {
            const resp = await fetch(`${api}${id}`);
            const data = await resp.json();
            setValue(data[key]);
        } catch(e) {
            console.log(e);
        }
    })()
        
    return value;
}