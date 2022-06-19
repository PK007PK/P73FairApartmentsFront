import React from 'react';
import { Link, graphql } from 'gatsby';
import SectionBlogPostHero from 'src/components/SectionBlogPostHero/SectionBlogPostHero';
import BlockContent from '@sanity/block-content-to-react';

import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';

import { ArticleStyling } from 'components/atoms/ArticleStyling/ArticleStyling';
import { Layout } from 'components/organisms/Layout/Layout';
import { SEO } from 'components/atoms/SEO/SEO';
import { OptionalBlogPostComponents } from 'components/molecules/OptionalBlogPostComponents/OptionalBlogPostComponents';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
    data: {
        previous: {
            name: string,
            slug: {
                current: string,
            }
        },
        next: {
            name: string,
            slug: {
                current: string,
            }
        },
        sanityBlogPosts: {
            name: string,
            lead: string, 
            date: string, 
            _rawRichText: string, 
            components: {sanityId: number}[],
            image?: {
                asset?: {
                    gatsbyImageData?: IGatsbyImageData,
                }
            }
        }
    },
}

const BlogPostTemplate: React.FunctionComponent<Props> = ({ data }) => {
    const { previous, next } = data;
    const { name, lead, date, _rawRichText, components } = data.sanityBlogPosts;
    const gatsbyImageData = data?.sanityBlogPosts?.image?.asset?.gatsbyImageData;
        
    const textBlock = () => (
        <div>
            <time className="lead">{date}</time>
            <h1>{name}</h1>
            <p className="lead">{lead}</p>
        </div>
    );

    const componentsArray = components.map((item) => item.sanityId);
    return (
        <Layout>
            <SEO title={name} templateDescription={lead} />
            <ArticleStyling className="blog-post" itemScope itemType="http://schema.org/Article">
                <SectionBlogPostHero leftComponent={textBlock} data={gatsbyImageData} />
                <BootsContainer>
                    <BootsRow between style={{ margin: '50px 0 50px' }}>
                        <BootsColumn md={7}>
                            <BlockContent
                                blocks={_rawRichText}
                                dataset="production"
                                url=""
                                projectId={process.env.SANITY_PROJECT_ID}
                            />
                        </BootsColumn>
                        <BootsColumn md={4}>
                            <OptionalBlogPostComponents title={name} excerpt={lead} data={componentsArray} />
                        </BootsColumn>
                    </BootsRow>
                </BootsContainer>
                <hr style={{ marginTop: '50px' }} />
            </ArticleStyling>
            <BootsContainer>
                <nav className="blog-post-nav">
                    <ul
                        style={{
                            display: `flex`,
                            flexWrap: `wrap`,
                            justifyContent: `space-between`,
                            listStyle: `none`,
                            padding: 0,
                        }}
                    >
                        <li>
                            {previous && (
                                <Link to={`/${previous.slug.current}`} rel="prev">
                                    ← {previous.name}
                                </Link>
                            )}
                        </li>
                        <li>
                            {next && (
                                <Link to={`/${next.slug.current}`} rel="next">
                                    {next.name} →
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </BootsContainer>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
        site {
            siteMetadata {
                title
            }
        }
        sanityBlogPosts(id: { eq: $id }) {
            id
            date
            name
            _rawRichText
            image {
                asset {
                    gatsbyImageData
                }
            }
            components {
                sanityId
            }
        }
        previous: sanityBlogPosts(id: { eq: $previousPostId }) {
            slug {
                current
            }
            name
        }
        next: sanityBlogPosts(id: { eq: $nextPostId }) {
            slug {
                current
            }
            name
        }
    }
`;
