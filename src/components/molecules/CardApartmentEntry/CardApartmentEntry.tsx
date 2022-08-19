import React from 'react';

import { Image } from 'src/components/atoms/Image/Image';
import { SimpleApartmentEntity } from 'src/types/apartment';
import { CardMapSmall } from '../CardMapSmall/CardMapSmall';
import { ImgPlaceholder } from '../ImgPlaceholder/ImgPlaceholder';

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
