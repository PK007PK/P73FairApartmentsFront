import React from "react";
import {
  BootsColumn,
  BootsRow,
} from "src/components/atoms/BootsElements/BootsElements";

import { Image } from "src/components/atoms/Image/Image";
import { SimpleApartmentEntity } from "src/types/apartment";
import { CardMapSmall } from "../CardMapSmall/CardMapSmall";
import { ImgPlaceholder } from "../ImgPlaceholder/ImgPlaceholder";

import { CardApartmentEntryStyle } from "./CardApartmentEntry.style";

export const CardApartmentEntry: React.FunctionComponent<
  SimpleApartmentEntity
> = (props) => {
  const { lat, lon, price, name, descriptionShort, mainImgLink } = props;
  console.log(props);

  return (
    <CardApartmentEntryStyle>
      <BootsRow id="blog" between>
        <BootsColumn md={3}>
          {mainImgLink ? (
            <Image src={mainImgLink} alt={`${name} photo`} />
          ) : (
            <ImgPlaceholder />
          )}
        </BootsColumn>
        <BootsColumn md={5}>
          <h3 className="title">{name}</h3>
          <p>{descriptionShort}</p>
        </BootsColumn>
        <BootsColumn md={4}>
          <CardMapSmall lat={lat} lon={lon} />
        </BootsColumn>
      </BootsRow>
    </CardApartmentEntryStyle>
  );
};

// return (
//     <CardApartmentEntryStyle>
//       <div className="imgWrapper">
//         {mainImgLink ? (
//           <Image src={mainImgLink} alt={`${name} photo`} />
//         ) : (
//           <ImgPlaceholder />
//         )}
//       </div>
//       <div className="textWrapper">
//         <h3 className="title">{name}</h3>
//         <p>{descriptionShort}</p>
//       </div>
//       <div className="mapWrapper">
//         <CardMapSmall lat={lat} lon={lon} />
//       </div>
//     </CardApartmentEntryStyle>
//   );
// };
