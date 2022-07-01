import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { graphql } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import { SEO } from 'components/atoms/SEO/SEO';
import { Layout } from 'components/organisms/Layout/Layout';
import { ArticleStyling } from 'components/atoms/ArticleStyling/ArticleStyling';
import { HeroTextBlock } from 'components/atoms/HeroTextBlock/HeroTextBlock';
import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { ApartmentDetails } from 'components/molecules/ApartmentDetails/ApartmentDetails';
import { getSingleValueFromApi } from 'hooks/getSingleValueFromApi';

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
    const name = getSingleValueFromApi(apartmentId, "name");
    const description = getSingleValueFromApi(apartmentId, "descriptionShort");

    useEffect(()=>{
        if (location.state.apartmentId) {
            setApartmentId(location.state.apartmentId)
        }
    }, [location])

    return (
        <Layout>
            <SEO title="O nas" />
            <SectionHero leftComponent={() => <HeroTextBlock title={name} description={description}/>} />
            <BootsContainer>
                <BootsRow between>
                    <BootsColumn style={{ marginTop: '50px' }} md={7}>
                        <ApartmentDetails apartmentId={apartmentId}/>
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export default Apartments;
