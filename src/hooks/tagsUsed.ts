import { useStaticQuery, graphql } from 'gatsby';

type NodeEntity = {
    tags: {
        name: string,
    }[]
}

interface StaticQueryEntity {
    allSanityBlogPosts: {
        nodes: NodeEntity[]
    }
}

export function tagsUsed(): {} {
    const data: StaticQueryEntity = useStaticQuery(graphql`
        {
            allSanityBlogPosts {
                nodes {
                    tags {
                        name
                    }
                }
            }
        }
    `);

    const allPostsTags: string[] = [];
    data.allSanityBlogPosts.nodes.forEach((post) => {
        post.tags.forEach((item) => allPostsTags.push(item.name));
    });
    const tagsCounts = {};
    allPostsTags.forEach((x) => {
        tagsCounts[x] = (tagsCounts[x] || 0) + 1;
    });
    
    return tagsCounts;
}
