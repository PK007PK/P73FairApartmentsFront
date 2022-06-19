import { createBlogPages } from './src/gatsby/createBlogPages.ts';
import { turnCategoriesIntoPages } from './src/gatsby/turnCategoriesIntoPages.ts';
import { turnTagsIntoPages } from './src/gatsby/turnTagsIntoPages.ts';

export async function createPages(params) {
    await Promise.all([createBlogPages(params), turnCategoriesIntoPages(params), turnTagsIntoPages(params)]);
}
