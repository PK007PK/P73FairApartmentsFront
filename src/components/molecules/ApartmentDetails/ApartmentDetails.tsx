import React from 'react'
import { ApartmentEntity } from 'src/types/apartment';

interface Props {
    apartmentDetails: ApartmentEntity;
}

export const ApartmentDetails = ({apartmentDetails}) => {
    if (!apartmentDetails) return (
        <p>Pobieram dane...</p> 
    );

    return (
        <table>
            <tbody>
            {
                Object.entries(apartmentDetails).map((el)=><tr key={el[0]}>
                    <td>{el[0]}</td>
                    <td>{el[1]}</td>
                </tr>)
            }
            </tbody>
        </table>
    )
}