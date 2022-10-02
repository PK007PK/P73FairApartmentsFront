import { useStaticQuery, graphql } from 'gatsby';

type NodeEntity = {
    categories: {
        name: string,
    }[]
}

interface StaticQueryEntity {
    allSanityBlogPosts: {
        nodes: NodeEntity[]
    }
}

export function categoriesUsed(): {} {
    const data: StaticQueryEntity = useStaticQuery(graphql`
        {
            allSanityBlogPosts {
                nodes {
                    categories {
                        name
                    }
                }
            }
        }
    `);

    const allPostsCategories: string[] = [];
    data.allSanityBlogPosts.nodes.forEach((post) => {
        post.categories.forEach((item) => allPostsCategories.push(item.name));
    });
    const categoriesCounts = {};
    allPostsCategories.forEach((x) => {
        categoriesCounts[x] = (categoriesCounts[x] || 0) + 1;
    });
    return categoriesCounts;
}
