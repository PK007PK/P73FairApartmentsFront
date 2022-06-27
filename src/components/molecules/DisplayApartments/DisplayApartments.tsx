import AppContext from "AppProvider"
import React, { useContext, useEffect, useState } from "react"
import { ApartmentEntity } from "types/apartment"

export const DisplayApartments = () => {
    const {search} = useContext(AppContext)
    const [apartments, setApartments] = useState<ApartmentEntity[] | []>([])
    
    useEffect(()=>{
        (async (): Promise<void> => {
            try {
                const resp = await fetch(`/api/apartment/search/${search}`);
                const data = await resp.json();
                setApartments(data);
            } catch(err) {
                console.log(err);
            }
        })()
    },[search])

    console.log(apartments);
    

    if (apartments === []) {
        return null;
    }

    return (
        <div>
            {
                apartments.map(ap=>ap.id)
            }
        </div>
    )
}