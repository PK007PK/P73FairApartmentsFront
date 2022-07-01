import React, { useEffect, useState } from 'react'
import { ApartmentEntity } from 'types/apartment';

interface Props {
    apartmentId: string;
}

export const ApartmentDetails = ({apartmentId}) => {
    const [details, setDetails] = useState<ApartmentEntity | null>(null);

    useEffect(()=>{
        (async (): Promise<void> => {
            try {
                const resp = await fetch(`/api/apartment/${apartmentId}`);
                const data = await resp.json();
                setDetails(data);                
            } catch(err) {
                console.log(err);
            }
        })()
    }, [apartmentId])

    if (!apartmentId || !details) return (
        <p>Pobieram dane...</p>
    );

    return (
        <table>
            <tbody>
            {
                Object.entries(details).map((el)=><tr key={el[0]}>
                    <td>{el[0]}</td>
                    <td>{el[1]}</td>
                </tr>)
            }
            </tbody>
        </table>
    )
}