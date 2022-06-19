import { useStaticQuery, graphql } from 'gatsby';

interface NodeData {
    name: string;
    slug: {
        current: string;
    };
}

interface GraphQlData {
    allSanityBlogPostsTags: {
        nodes: NodeData[]
    }
}

type ArrayOfNodes = NodeData[]

export function useFilterTagsGraphQLData(): ArrayOfNodes {
    const data: GraphQlData = useStaticQuery(graphql`
        {
            allSanityBlogPostsTags(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    
    const tags = data.allSanityBlogPostsTags.nodes;
    return tags;
}