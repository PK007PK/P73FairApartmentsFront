import { useStaticQuery, graphql } from 'gatsby';

interface NodeData {
    name: string;
    slug: {
        current: string;
    };
}

interface GraphQlData {
    allSanityBlogPostsCategories: {
        nodes: NodeData[]
    }
}

type ArrayOfNodes = NodeData[]

export function useFilterCategoryGraphQLData(): ArrayOfNodes {
    const data: GraphQlData = useStaticQuery(graphql`
        {
            allSanityBlogPostsCategories(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    
    const categories = data.allSanityBlogPostsCategories.nodes;
    return categories;
}