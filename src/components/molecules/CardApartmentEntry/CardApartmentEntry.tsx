import React from "react";
import { Link } from "gatsby";
import {
  BootsColumn,
  BootsRow,
} from "src/components/atoms/BootsElements/BootsElements";
import { Image } from "src/components/atoms/Image/Image";
import { PublicApartmentEntity } from "src/types/apartment";
import { CardMapSmall } from "../CardMapSmall/CardMapSmall";
import { ImgPlaceholder } from "../ImgPlaceholder/ImgPlaceholder";

import { CardApartmentEntryStyle } from "./CardApartmentEntry.style";

export const CardApartmentEntry: React.FunctionComponent<
  PublicApartmentEntity
> = (props) => {
  const { id, lat, lon, name, descriptionShort, mainImgLink } = props;

  return (
    <CardApartmentEntryStyle>
      <BootsRow id="blog" between>
        <BootsColumn md={3}>
          <Link to="/apartments" state={{ apartmentId: id }}>
            {mainImgLink ? (
              <Image src={mainImgLink} alt={`${name} photo`} />
            ) : (
              <ImgPlaceholder />
            )}
          </Link>
        </BootsColumn>
        <BootsColumn md={5}>
          <Link to="/apartments" state={{ apartmentId: id }}>
            <h3 className="title">{name}</h3>
            <p>{descriptionShort}</p>
          </Link>
        </BootsColumn>
        <BootsColumn md={4}>
          <CardMapSmall lat={lat} lon={lon} />
        </BootsColumn>
      </BootsRow>
    </CardApartmentEntryStyle>
  );
};
