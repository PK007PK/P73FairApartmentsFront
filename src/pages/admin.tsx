import React, { useRef } from 'react';
import { SEO } from 'components';
import { Layout } from 'components';
import { HeroTextBlock } from 'components';
import { BootsContainer, BootsRow, BootsColumn } from 'components';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { DisplayApartments } from 'components';
import { Modal } from 'components';
import { FormApartment } from 'components';

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
