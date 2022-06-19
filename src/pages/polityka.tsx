import React from 'react';
import { graphql } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';
import { Layout } from 'components/organisms/Layout/Layout';
import { SEO } from 'components/atoms/SEO/SEO';
import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { FormContact } from 'components/molecules/FormContact/FormContact';
import { HeroTextBlock } from 'components/atoms/HeroTextBlock/HeroTextBlock';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
    data: {
        sanityPagePolicy: {
            title: string,
            description: string,
            image: {
                asset: {
                    gatsbyImageData?: IGatsbyImageData,
                },
            },
            _rawRichText: string,
        },
    },
};

const PolitykaPage: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
    const {
        title,
        description,
        image: {
            asset: { gatsbyImageData },
        },
        _rawRichText,
    } = data.sanityPagePolicy;

    return (
        <Layout>
            <SEO title="Kontakt" />
            <SectionHero
                leftComponent={() => <HeroTextBlock title={title} description={description} />}
            />
            <BootsContainer>
                <BootsRow between style={{ margin: '50px 0 50px' }}>
                    <BootsColumn md={6}>
                        <BlockContent
                            blocks={_rawRichText}
                            dataset="production"
                            url=""
                            projectId={process.env.SANITY_PROJECT_ID}
                        />
                    </BootsColumn>
                    <BootsColumn md={5}>
                        <FormContact />
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        sanityPagePolicy {
            title
            tags
            description
            image {
                asset {
                    gatsbyImageData(width: 400)
                }
            }
            _rawRichText
        }
    }
`;

export default PolitykaPage;
