import React from 'react';
import { CardMapSmall } from 'components';
import { Image } from 'components';
import { ImgPlaceholder } from 'components';
import { SimpleApartmentEntity } from 'types/apartment';
import { CardApartmentEntryStyle } from './CardApartmentEntry.style';

export const CardApartmentEntry: React.FunctionComponent<SimpleApartmentEntity> = (props) => {
    const { 
        lat,
        lon,
        price,
        name,
        descriptionShort,
        mainImgLink,
    } = props;

    return (
        <CardApartmentEntryStyle>
            <div className="imgWrapper">
                {
                    mainImgLink ? <Image src={mainImgLink} alt={`${name} photo`}/> 
                    : <ImgPlaceholder />
                }
            </div>
            <div className="textWrapper">
                <h3 className="title">{name}</h3>
                <p>{descriptionShort}</p>
                <p>Cena: {price}</p>
            </div>
            <div className='mapWrapper'>
                <CardMapSmall lat={lat} lon={lon}/>
            </div>
        </CardApartmentEntryStyle>
    );
};
