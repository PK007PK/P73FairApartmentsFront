import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Logo } from 'components/atoms/Logo/Logo';
import { CardApartmentEntryStyle } from './CardApartmentEntry.style';
import { SimpleApartmentEntity } from 'types/apartment';
import { CardMapSmall } from 'components/molecules/CardMapSmall/CardMapSmall';
import { Image } from 'components/atoms/Image/Image';

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
                <Image src={mainImgLink}/>
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
