import React, { useEffect, useState } from 'react';

import { SEO } from 'components';
import { Layout } from 'components';
import { HeroTextBlock } from 'components';
import { BootsContainer, BootsRow, BootsColumn } from 'components';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { ApartmentDetails } from 'components';
import { ApartmentEntity } from 'types/apartment';
import { Image } from 'components';
import { ImgPlaceholder } from 'components';
import { alternateValue } from 'utils/alternateValue';
import { detectEnvForApiCalls } from 'hooks/detectEnvForApiCalls';

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
        if (location?.state?.apartmentId) {
            setApartmentId(location.state.apartmentId)
        }
    }, [location])

    const [apartmentDetails, setApartmentDetails] = useState<ApartmentEntity | null>(null);
    const prefix = detectEnvForApiCalls();    
    
    useEffect(()=>{
        apartmentId && (async (): Promise<void> => {
            try {
                const resp = await fetch(`${prefix}/api/apartment/${apartmentId}`);
                const data = await resp.json();
                setApartmentDetails(data);                
            } catch(err) {
                console.log(err);
            }
        })()
    }, [apartmentId])
       
    return (
        <Layout>
            <SEO title="O nas" />
            <SectionHero
                Ycenter={true}
                leftComponent={() => 
                    <HeroTextBlock 
                        title={alternateValue(apartmentDetails?.name)} 
                        description={alternateValue(apartmentDetails?.descriptionShort)}
                    />} 
                rightComponent={
                    () => (apartmentDetails && apartmentDetails.mainImgLink !== "") ? 
                        <Image 
                            src={alternateValue(apartmentDetails?.mainImgLink)} 
                            alt={alternateValue(apartmentDetails?.name)}
                        /> : <ImgPlaceholder style={{height: "300px"}}/>
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
