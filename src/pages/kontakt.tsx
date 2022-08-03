import React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import BlockContent from '@sanity/block-content-to-react';
import { HeroTextBlock } from 'components';
import { SEO } from 'components';
import { BootsContainer, BootsRow, BootsColumn } from 'components';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { Layout } from 'components';
import { ArticleStyling } from 'components';
import { FormContact } from 'components';

interface Props {
    data: {
        sanityPageKontakt: {
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

const KontaktPage: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
    const {
        title,
        description,
        image: {
            asset: { gatsbyImageData },
        },
        _rawRichText,
    } = data.sanityPageKontakt;

    return (
        <Layout>
            <SEO title="Kontakt" />
            <SectionHero
                leftComponent={() => <HeroTextBlock title={title} description={description} />}
            />
            <BootsContainer>
                <BootsRow between style={{ margin: '50px 0 50px' }}>
                    <BootsColumn md={6}>
                        <ArticleStyling className="blog-post">
                            <BlockContent
                                blocks={_rawRichText}
                                dataset="production"
                                url=""
                                projectId={process.env.SANITY_PROJECT_ID ?? ""}
                            />
                        </ArticleStyling>
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
        sanityPageKontakt {
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

export default KontaktPage;
