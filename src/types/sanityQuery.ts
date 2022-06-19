export interface SanityQuery {
    sanityWebsiteSettings?: {
        title?: string,
        description?: string,
        lang?: string,
        svgFavicon?: {
            _rawAsset?: {
                metadata?: {
                    lqip?: string,
                },
                url?: string,
            },
        }
        sitePreviev?: {
            _rawAsset?: {
                metadata?: {
                    lqip?: string,
                },
                url?: string,
            },
        }
        keywords?: string,
        websiteOwnerFormalName?: string,
        copyright?: string,
    },
    sanityMenuData?: {
        menuItems?: { pageSlug?: string, pageName?: string }[]
    },
    allSanityBlogPostsCategories?: {
        nodes?: {
            name?: string,
            slug?: {
                current?: string,
            }
        }
    }
}