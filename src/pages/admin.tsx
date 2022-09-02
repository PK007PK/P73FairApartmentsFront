import React, { useRef } from 'react';
import { BootsColumn, BootsContainer, BootsRow } from 'src/components/atoms/BootsElements/BootsElements';
import { HeroTextBlock } from 'src/components/atoms/HeroTextBlock/HeroTextBlock';
import Modal from 'src/components/atoms/Modal/Modal';
import { SEO } from 'src/components/atoms/SEO/SEO';
import { DisplayApartments } from 'src/components/molecules/DisplayApartments/DisplayApartments';
import { FormApartment } from 'src/components/molecules/FormApartment/FormApartment';
import { Layout } from 'src/components/organisms/Layout/Layout';
import { SectionHero } from 'src/components/molecules/SectionHero/SectionHero';

interface Props {}

const Admin: React.FunctionComponent<Props> = (): JSX.Element => {
    const modalRef1 = useRef();

    return (
        <Layout>
            <SEO title="O nas" />
            <SectionHero leftComponent={() => <HeroTextBlock title={"Administrowanie flotą chatek"} description={"Dodawaj, usuwaj, edytuj chatki"} />} />
            <SEO title="" />
            <BootsContainer>
                <BootsRow between>
                    <BootsColumn>
                        <button onClick={() => modalRef1.current.openModal()}>Dodaj apartament</button>
                        <Modal ref={modalRef1} title="Dodaj apartament">
                            <FormApartment />
                        </Modal>
                        <DisplayApartments boxes={true} />
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export default Admin;
