import React, { useRef } from 'react';
import { SEO } from 'components/atoms/SEO/SEO';
import { Layout } from 'components/organisms/Layout/Layout';
import { HeroTextBlock } from 'components/atoms/HeroTextBlock/HeroTextBlock';
import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { DisplayApartments } from 'components/molecules/DisplayApartments/DisplayApartments';
import { Modal } from 'components/molecules/Modal/Modal';
import { FormApartment } from 'components/molecules/FormApartment/FormApartment';

interface Props {
   
}

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
