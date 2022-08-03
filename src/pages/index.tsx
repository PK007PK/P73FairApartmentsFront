import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Search } from 'components/search';
import { SEO } from 'components';
import { Pagination } from 'components';
import { SectionHero } from 'components/SectionHero/SectionHero';
import { BootsContainer, BootsRow, BootsColumn } from 'components';
import { Layout } from 'components';
import { CardContactForm } from 'components';
import { FilterCategory } from 'components';
import { FilterTags } from 'components';
import { HeroTextBlock } from 'components';
import { PostsToDisplay } from 'components';
import { SearchApartment } from 'components';
import { Title } from 'components';
import { DisplayApartments } from 'components';
import { SanityPagesBasicStructure } from 'types/SanityPagesBasicStructure';

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
                        <h3 style={{ marginTop: 'var(--spacingSmall)', textAlign: 'center' }}>Znajdź w artykułach</h3>
                        <Search staticInput indices={searchIndices} />
                    </BootsColumn>
                </BootsRow>
                <BootsRow id="blog" between>
                    <BootsColumn md={8}>
                        <PostsToDisplay data={postsToDisplay.nodes.slice(0, pagesInSet)} />
                        {/* <Pagination
                            pageSize={pagesInSet}
                            totalCount={postsToDisplay.totalCount}
                            currentPage={pageContext.currentPage || 1}
                            base={pageContext.dirName}
                            style={{ marginBottom: '25px' }}
                        /> */}
                    </BootsColumn>
                    <BootsColumn md={4}>
                        <CardContactForm />
                    </BootsColumn>
                </BootsRow>
                <BootsRow>
                    <BootsColumn>
                        <Title as="h2" center={false}>Nieruchomości w bazie</Title>
                        <SearchApartment />
                        <DisplayApartments />
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