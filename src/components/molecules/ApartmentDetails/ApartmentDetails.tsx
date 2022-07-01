import React, { useEffect, useState } from 'react'
import { ApartmentEntity } from 'types/apartment';

interface Props {
    apartmentDetails: ApartmentEntity;
}

export const ApartmentDetails = ({apartmentDetails}) => {
    

    if (!apartmentDetails) return (
        <p>Pobieram dane...</p> 
    );
    console.log(apartmentDetails);

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