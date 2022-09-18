import React, { useEffect, useState } from "react";

import { Layout } from "src/components/organisms/Layout/Layout";
import { SEO } from "src/components/atoms/SEO/SEO";
import { SectionHero } from "src/components/molecules/SectionHero/SectionHero";
import { HeroTextBlock } from "src/components/atoms/HeroTextBlock/HeroTextBlock";
import { Image } from "src/components/atoms/Image/Image";
import { ImgPlaceholder } from "src/components/molecules/ImgPlaceholder/ImgPlaceholder";
import {
  BootsColumn,
  BootsContainer,
  BootsRow,
} from "src/components/atoms/BootsElements/BootsElements";
import { ApartmentDetails } from "src/components/molecules/ApartmentDetails/ApartmentDetails";

import { PublicApartmentEntity } from "src/types/apartment";
import { alternateValue } from "src/utils/alternateValue";
import { detectEnvForApiCalls } from "src/hooks/detectEnvForApiCalls";

interface Props {
  data: {
    sanityPageAbout: {
      title: string;
      description: string;
      _rawRichText: string;
    };
  };
  location: any;
}

const Apartments: React.FunctionComponent<Props> = ({
  location,
}): JSX.Element => {
  const [apartmentId, setApartmentId] = useState<string | null>(null);

  useEffect(() => {
    if (location?.state?.apartmentId) {
      setApartmentId(location.state.apartmentId);
    }
  }, [location]);

  const [apartmentDetails, setApartmentDetails] =
    useState<PublicApartmentEntity | null>(null);
  const prefix = detectEnvForApiCalls();

  useEffect(() => {
    apartmentId &&
      (async (): Promise<void> => {
        try {
          const resp = await fetch(`${prefix}/api/apartment/${apartmentId}`);
          const data = await resp.json();
          setApartmentDetails(data);
        } catch (err) {
          console.log(err);
        }
      })();
  }, [apartmentId]);

  return (
    <Layout>
      <SEO title="O nas" />
      <SectionHero
        Ycenter={true}
        leftComponent={() => (
          <>
            <HeroTextBlock
              title={alternateValue(apartmentDetails?.name)}
              description={alternateValue(apartmentDetails?.descriptionShort)}
            />
          </>
        )}
        rightComponent={() =>
          apartmentDetails && apartmentDetails.mainImgLink !== "" ? (
            <Image
              src={alternateValue(apartmentDetails?.mainImgLink)}
              alt={alternateValue(apartmentDetails?.name)}
            />
          ) : (
            <ImgPlaceholder style={{ height: "300px" }} />
          )
        }
      />
      <BootsContainer>
        <BootsRow between>
          <BootsColumn md={7}>
            <ApartmentDetails apartmentDetails={apartmentDetails} />
          </BootsColumn>
        </BootsRow>
      </BootsContainer>
    </Layout>
  );
};

export default Apartments;
