import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import AppContext from "AppProvider"
import { CardApartmentBasicInfo } from "components"
import { CardApartmentEntry } from "components"
import { ApartmentEntity } from "types/apartment"
import { DisplayApartmentsStyle } from "./DisplayApartments.style"
import { detectEnvForApiCalls } from "hooks/detectEnvForApiCalls"

interface Props {
    boxes: boolean,
}

export const DisplayApartments: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {boxes} = props;
    const {search} = useContext(AppContext)
    const [apartments, setApartments] = useState<ApartmentEntity[] | []>([])

    const prefix = detectEnvForApiCalls();

    useEffect(()=>{
        (async (): Promise<void> => {
            try {
                const resp = await fetch(`${prefix}/api/apartment/search/${search}`);
                const data = await resp?.json();
                data && setApartments(data);
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
                apartments && apartments.map(
                    (ap: ApartmentEntity) => {
                        if (boxes) {                        
                            return (
                                <CardApartmentBasicInfo key={ap.id} name={ap.name} image={ap.mainImgLink} id={ap.id}/>
                            )
                        } else {
                            return (
                                <Link 
                                    to="/apartments"
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