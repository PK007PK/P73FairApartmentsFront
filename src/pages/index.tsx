import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Search } from 'components/search';
import { SEO } from 'components/atoms/SEO/SEO';
import { Pagination } from 'components/atoms/Pagination/Pagination';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { Layout } from 'components/organisms/Layout/Layout';
import { CardContactForm } from 'components/molecules/CardContactForm/CardContactForm';
import { FilterCategory } from 'components/molecules/FilterCategory/FilterCategory';
import { FilterTags } from 'components/molecules/FilterTags/FilterTags';
import { HeroTextBlock } from 'components/atoms/HeroTextBlock/HeroTextBlock';
import { Newsletter } from 'components/organisms/Newsletter/Newsletter';
import { PostsToDisplay } from 'components/molecules/PostsToDisplay/PostsToDisplay';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SanityPagesBasicStructure } from 'types/SanityPagesBasicStructure';
import { InfiniteScroll } from 'components/atoms/InfiniteScroll/InfiniteScroll';
import { Accordion } from 'components/atoms/Accordion/Accordion';
import { accordionTemplateData } from 'data/accordionTemplateData';

const searchIndices = [{ name: `Pages`, title: `Pages` }];

interface Data {
    category: {
        nodes: {
            categories: {
                name: string,
            }[],
            date: string,
            image?: {
                asset?: {
                    gatsbyImageData?: IGatsbyImageData,
                },
            },
            lead: string,
            name: string,
            slug: {
                current: string,
            }
        }[],
        totalCounts: number,
    },
    tag: {
        nodes: {
            categories: {
                name: string,
            }[],
            date: string,
            image?: {
                asset?: {
                    gatsbyImageData?: IGatsbyImageData,
                },
            },
            lead: string,
            name: string,
            slug: {
                current: string,
            }
        }[],
        totalCounts: number,
    },
    allPosts: {
        nodes: {
            categories: {
                name: string,
            }[],
            date: string,
            image?: {
                asset?: {
                    gatsbyImageData?: IGatsbyImageData,
                },
            },
            lead: string,
            name: string,
            slug: {
                current: string,
            },
        }[],
        totalCounts: number,
    },
    sanityWebsiteSettings: {
        title: string,
    },
    sanityBlogConfig: {
        pagesInSet: number,
    },
    sanityPageHome: SanityPagesBasicStructure,
};

interface Props {
    data: Data,
    pageContext: {
        dirName: string,
        pageType: string,
        skip: number,
        selectionName: string,
        currentPage: number,
    },
    location: Location,
}

const IndexPage: React.FunctionComponent<Props> = ({ data, pageContext, location }): JSX.Element => {
    if (pageContext.dirName === undefined) {
        pageContext.dirName = `/`;
    }
    
    const categories = data.category;
    const tags = data.tag;
    const { allPosts } = data;

    let postsToDisplay;

    switch (pageContext.pageType) {
        case 'allPaginatedPosts':
            postsToDisplay = allPosts;
            break;
        case 'allPostsInCategory':
            postsToDisplay = categories;
            break;
        case 'allPostsInTag':
            postsToDisplay = tags;
            break;
        default:
            postsToDisplay = allPosts;
    }

    const { pagesInSet } = data.sanityBlogConfig;
    const { title: websiteTitle = 'Component title' } = data.sanityWebsiteSettings;
    
    const {
        title,
        description,
        image: {
            asset: { gatsbyImageData },
        },
    } = data.sanityPageHome;

    const TextForHeader = () => <HeroTextBlock title={title} description={description} />
    const PictureForHeader = () => <GatsbyImage style={{width: "100%"}} image={gatsbyImageData} alt="" />

    return (
        <Layout>
            <SEO
                title={`${websiteTitle} ${pageContext.selectionName ? `| ${pageContext.selectionName}` : ''} ${
                    pageContext.currentPage ? `| ${pageContext.currentPage}` : ''
                }`}
            />
            <SectionHero
                Ycenter={true}
                leftComponent={
                    () => <TextForHeader />
                }
                rightComponent={
                    () => <PictureForHeader />
                }
            />
            <BootsContainer>
                <BootsRow id="blog" between>
                    <BootsColumn md={8}>
                        <FilterCategory location={location} />
                        <FilterTags location={location} />
                        <Pagination
                            pageSize={pagesInSet}
                            totalCount={postsToDisplay.totalCount}
                            currentPage={pageContext.currentPage || 1}
                            base={pageContext.dirName}
                            style={{ marginBottom: '25px' }}
                        />
                    </BootsColumn>
                    <BootsColumn md={4}>
                        <h3 style={{ marginTop: 'var(--spacingSmall)', textAlign: 'center' }}>Search site</h3>
                        <Search staticInput indices={searchIndices} />
                    </BootsColumn>
                </BootsRow>
                <BootsRow id="blog" between>
                    <BootsColumn md={8}>
                        <PostsToDisplay data={postsToDisplay.nodes.slice(0, pagesInSet)} />
                        <Pagination
                            pageSize={pagesInSet}
                            totalCount={postsToDisplay.totalCount}
                            currentPage={pageContext.currentPage || 1}
                            base={pageContext.dirName}
                            style={{ marginBottom: '25px' }}
                        />
                    </BootsColumn>
                    <BootsColumn md={4}>
                        <Newsletter style={{ marginBottom: '50px' }} />
                        <CardContactForm />
                        <Accordion title="Accordion" data={accordionTemplateData} />
                    </BootsColumn>
                </BootsRow>
                <BootsRow>
                    <BootsColumn>
                        <InfiniteScroll title="Infinite scroll" />
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query pagesQuery($selectionName: String, $skip: Int = 0, $pageSize: Int) {
        sanityWebsiteSettings {
            title
        }
        sanityBlogConfig {
            pagesInSet
        }
        sanityPageHome {
            title
            tags
            description
            image {
                asset {
                    gatsbyImageData(width: 400)
                }
            }
        }
        category: allSanityBlogPosts(
            limit: $pageSize
            skip: $skip
            sort: { order: DESC, fields: date }
            filter: { categories: { elemMatch: { name: { eq: $selectionName } } } }
        ) {
            totalCount
            nodes {
                name
                lead
                date(formatString: "")
                slug {
                    current
                }
                categories {
                    name
                }
                image {
                    asset {
                        gatsbyImageData(width: 400)
                    }
                }
            }
        }
        tag: allSanityBlogPosts(
            limit: $pageSize
            skip: $skip
            sort: { order: DESC, fields: date }
            filter: { tags: { elemMatch: { name: { eq: $selectionName } } } }
        ) {
            totalCount
            nodes {
                name
                lead
                date(formatString: "")
                slug {
                    current
                }
                categories {
                    name
                }
                image {
                    asset {
                        gatsbyImageData(width: 400)
                    }
                }
            }
        }
        allPosts: allSanityBlogPosts(limit: $pageSize, skip: $skip, sort: { order: DESC, fields: date }) {
            totalCount
            nodes {
                name
                lead
                date(formatString: "")
                slug {
                    current
                }
                categories {
                    name
                }
                image {
                    asset {
                        gatsbyImageData(width: 400)
                    }
                }
            }
        }
    }
`;