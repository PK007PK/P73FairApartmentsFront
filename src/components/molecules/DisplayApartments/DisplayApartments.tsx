import AppContext from "AppProvider"
import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { ApartmentEntity } from "types/apartment"
import { CardApartmentEntry } from "../CardApartmentEntry/CardBlogEntry/CardApartmentEntry"

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
                apartments.map(
                    (ap) => 
                        <Link 
                            to="apartments"
                            state={{ apartmentId: ap.id }}
                        >
                            <CardApartmentEntry key={ap.id} {...ap}/>
                        </Link>
                )
            }
        </div>
    )
}