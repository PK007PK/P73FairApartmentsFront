import React from "react";
import { PublicApartmentEntity } from "src/types/apartment";

interface Props {
  apartmentDetails: PublicApartmentEntity;
}

export const ApartmentDetails: React.FunctionComponent<Props> = ({
  apartmentDetails,
}): JSX.Element => {
  if (!apartmentDetails) return <p>Pobieram dane...</p>;

  return (
    <>
      <div>
        <h3>Adres:</h3>
        <p>{apartmentDetails.adress}</p>
      </div>
      <div>
        <h3>Powierzchnia:</h3>
        <p>{apartmentDetails.space}</p>
      </div>
      <div>
        <h3>Piętro:</h3>
        <p>{apartmentDetails.floor}</p>
      </div>
      <div>
        <h3>Opis pokoi:</h3>
        <p>{apartmentDetails.roomsDesc}</p>
      </div>
      <div>
        <h3>Opis kuchni:</h3>
        <p>{apartmentDetails.kitchenDesc}</p>
      </div>
      <div>
        <h3>Inne pomieszczenia:</h3>
        <p>{apartmentDetails.otherSpacesDesc}</p>
      </div>
      <div>
        <h3>Instalacje:</h3>
        <p>{apartmentDetails.instalationDesc}</p>
      </div>
      <div>
        <h3>Czynsz dla wspólnoty / spółdzielni:</h3>
        <p>{apartmentDetails.administrationCosts}</p>
      </div>
      <div>
        <h3>Pozostałe koszty:</h3>
        <p>{apartmentDetails.otherCostsDesc}</p>
      </div>
    </>
    // <table>
    //   <tbody>
    //     {Object.entries(apartmentDetails).map((el) => (
    //       <tr key={el[0]}>
    //         <td>{el[0]}</td>
    //         <td>{el[1]}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};
