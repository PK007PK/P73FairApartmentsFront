import React from 'react';
import { CardApartmentEntryStyle } from './CardApartmentEntry.style';
import { SimpleApartmentEntity } from 'types/apartment';
import { CardMapSmall } from 'components/molecules/CardMapSmall/CardMapSmall';
import { Image } from 'components/atoms/Image/Image';
import { ImgPlaceholder } from 'components/molecules/ImgPlaceholder/ImgPlaceholder';

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
