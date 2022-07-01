import React, { useEffect, useState } from 'react';

import { SEO } from 'components/atoms/SEO/SEO';
import { Layout } from 'components/organisms/Layout/Layout';
import { HeroTextBlock } from 'components/atoms/HeroTextBlock/HeroTextBlock';
import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { ApartmentDetails } from 'components/molecules/ApartmentDetails/ApartmentDetails';
import { getSingleValueFromApi } from 'hooks/getSingleValueFromApi';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { ApartmentEntity } from 'types/apartment';
import { PictureForHeader } from 'components/atoms/PictureForHeader/PictureForHeader';

interface Props {
    data: {
        sanityPageAbout: {
            title: string,
            description: string,
            _rawRichText: string,
        }
    },
    location: any,
}

const Apartments: React.FunctionComponent<Props> = ({ location }): JSX.Element => {
   
    const [apartmentId, setApartmentId] = useState<string | null>(null)

    useEffect(()=>{
        if (location.state.apartmentId) {
            setApartmentId(location.state.apartmentId)
        }
    }, [location])

    const [apartmentDetails, setApartmentDetails] = useState<ApartmentEntity | null>(null);

    useEffect(()=>{
        (async (): Promise<void> => {
            try {
                const resp = await fetch(`/api/apartment/${apartmentId}`);
                const data = await resp.json();
                setApartmentDetails(data);                
            } catch(err) {
                console.log(err);
            }
        })()
    }, [apartmentId])

    let name: string, descriptionShort: string, mainImgLink: string = ""

    if  (apartmentDetails) {
        name = apartmentDetails.name;
        descriptionShort = apartmentDetails.descriptionShort;
        mainImgLink = apartmentDetails.mainImgLink;
    }
        
    return (
        <Layout>
            <SEO title="O nas" />
            <SectionHero
                Ycenter={true}
                leftComponent={() => <HeroTextBlock title={name} description={descriptionShort}/>} 
                rightComponent={
                    () => <PictureForHeader src={mainImgLink}/>
                }
            />
            <BootsContainer>
                <BootsRow between>
                    <BootsColumn style={{ marginTop: '50px' }} md={7}>
                        <ApartmentDetails apartmentDetails={apartmentDetails}/>
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export default Apartments;
