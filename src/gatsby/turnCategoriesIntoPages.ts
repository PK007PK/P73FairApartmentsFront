import path from 'path';

export async function turnCategoriesIntoPages({ graphql, actions }) {
    // 1. Get the template
    const categoryTemplate = path.resolve('./src/pages/index.tsx');

    // 2. query all the categories
    const { data } = await graphql(`
        query {
            allSanityBlogPostsCategories {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const allCategoriesDetails = data.allSanityBlogPostsCategories.nodes;

    // 3. createPage

    const createCategories = allCategoriesDetails.map(async (category) => {
        async function findHowManyPostsInCategory() {
            const selectCategory = `"${category.name}"`;
            const dataWithAllPostsInCategory = await graphql(`
                        query myQuery {
                            allSanityBlogPosts(
                                filter: {
                                categories: {elemMatch: {name: {eq: ${selectCategory}}}}}
                            )
                            {
                                totalCount
                            }
                            sanityBlogConfig {
                                pagesInSet
                            }
                        }
                    `);
            const numberOfPosts = dataWithAllPostsInCategory.data.allSanityBlogPosts.totalCount;
            const numberOfPagesInSet = dataWithAllPostsInCategory.data.sanityBlogConfig.pagesInSet;
            return { numberOfPosts, numberOfPagesInSet };
        }

        const numberOfPostsAndPages = await findHowManyPostsInCategory();
        const pageSize = numberOfPostsAndPages.numberOfPagesInSet;
        const numberOfPages = Math.ceil(numberOfPostsAndPages.numberOfPosts / pageSize);

        Array.from({ length: numberOfPages }).map((_, i) => {
            actions.createPage({
                path: `/${category.slug.current}/${i + 1}`,
                component: categoryTemplate,
                context: {
                    skip: i * pageSize,
                    currentPage: i + 1,
                    pageSize,
                    selectPosts: `/${category.slug.current}/i`,
                    selectionName: category.name,
                    pageType: 'allPostsInCategory',
                    dirName: `/${category.slug.current}/`,
                },
            });
        });
    });
    await Promise.all(createCategories);
}
