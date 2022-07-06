import React from 'react';
import { SEO } from 'components/atoms/SEO/SEO';
import { Layout } from 'components/organisms/Layout/Layout';
import { HeroTextBlock } from 'components/atoms/HeroTextBlock/HeroTextBlock';
import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { DisplayApartments } from 'components/molecules/DisplayApartments/DisplayApartments';
import { ApartmentForm } from 'components/molecules/ApartmentForm/ApartmentForm';
import { CardApartmentBasicInfo } from 'components/molecules/CardApartmentBasicInfo/CardApartmentBasicInfo';

interface Props {
   
}

const Admin: React.FunctionComponent<Props> = (): JSX.Element => {

    return (
        <Layout>
            <SEO title="O nas" />
            <SectionHero leftComponent={() => <HeroTextBlock title={"Administrowanie flotą chatek"} description={"Dodawaj, usuwaj, edytuj chatki"} />} />
            <SEO title="" />
            <BootsContainer>
                <BootsRow between>
                    <BootsColumn>
                        <CardApartmentBasicInfo name="Dodaj nową chatkę" />
                        <DisplayApartments boxes={true} />
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export default Admin;
