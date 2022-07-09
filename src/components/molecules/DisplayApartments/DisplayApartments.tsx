import AppContext from "AppProvider"
import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { ApartmentEntity } from "types/apartment"
import { CardApartmentBasicInfo } from "../CardApartmentBasicInfo/CardApartmentBasicInfo"
import { CardApartmentEntry } from "../CardApartmentEntry/CardBlogEntry/CardApartmentEntry"
import { DisplayApartmentsStyle } from "./DisplayApartments.style"

interface Props {
    boxes: boolean,
}

export const DisplayApartments: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {boxes} = props;
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

    if (apartments === []) {
        return <p>Brak nieruchomości</p>;
    }

    return (
        <DisplayApartmentsStyle boxes={boxes}>
            {
                apartments.map(
                    (ap: ApartmentEntity) => {
                        if (boxes) {                        
                            return (
                                <CardApartmentBasicInfo key={ap.id} name={ap.name} image={ap.mainImgLink} id={ap.id}/>
                            )
                        } else {
                            return (
                                <Link 
                                    to="apartments"
                                    state={{ apartmentId: ap.id }}
                                    key={ap.id}
                                >
                                    <CardApartmentEntry key={ap.id} {...ap}/>
                                </Link>
                            )
                        }
                    }
                )
            }
        </DisplayApartmentsStyle>
    )
}