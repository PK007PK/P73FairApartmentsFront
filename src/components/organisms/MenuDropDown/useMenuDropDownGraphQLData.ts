import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface MenuItem {
    pageSlug: string,
    pageName: string,
}

interface NodeData {
    name: string,
    position?: number,
    slug: {
        current: string,
    },
    lead?: string,
    date?: string,
    image?: {
        asset?: {
            gatsbyImageData?: IGatsbyImageData,
        }
    }
}

interface GraphQlData {
    sanityMenuData: {
        menuItems: MenuItem[],
    },
    allSanityBlogPostsCategories: {
        nodes: NodeData[],
    },
    allSanityBlogPostsTags: {
        nodes: NodeData[],
    },
    allSanityBlogPosts: {
        nodes: NodeData[],
    }
}


export function useMenuDropDownGraphQLData() {
    const data: GraphQlData = useStaticQuery(graphql`
        {
            sanityMenuData {
                menuItems {
                    pageSlug
                    pageName
                }
            }
            allSanityBlogPostsCategories(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    position
                    slug {
                        current
                    }
                }
            }
            allSanityBlogPostsTags(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    position
                    slug {
                        current
                    }
                }
            }
            allSanityBlogPosts(limit: 3, sort: { order: DESC, fields: date }) {
                nodes {
                    name
                    slug {
                        current
                    }
                    lead
                    date(formatString: "")
                    image {
                        asset {
                            gatsbyImageData(width: 400)
                        }
                    }
                }
            }
        }
    `);
    
    const menuData = data.sanityMenuData.menuItems;
    const categories = data.allSanityBlogPostsCategories.nodes;
    const tags = data.allSanityBlogPostsTags.nodes;
    const posts = data.allSanityBlogPosts.nodes;

    return {
        menuData,
        categories,
        tags,
        posts,
    }
}