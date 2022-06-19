import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { CommonProps } from 'types/commonProps';
import { SanityQuery } from 'types/sanityQuery';

interface Props extends CommonProps {
    location?: {
        href: string,
    },
    title: string,
    templateDescription?: string,
}

export const SEO: React.FunctionComponent<Props> = ({ children, location, title, templateDescription }) => {
    const data: SanityQuery = useStaticQuery(graphql`
        {
            sanityWebsiteSettings {
                title
                description
                lang
                svgFavicon {
                    _rawAsset(resolveReferences: { maxDepth: 10 })
                }
                sitePreviev {
                    _rawAsset(resolveReferences: { maxDepth: 10 })
                }
                keywords
            }
        }
    `);

    const svgFavicon = data.sanityWebsiteSettings?.svgFavicon?._rawAsset?.metadata?.lqip;
    const sitePreview = data.sanityWebsiteSettings?.sitePreviev?._rawAsset?.url;

    return (
        <Helmet>
            <html lang={data.sanityWebsiteSettings?.lang || 'en'} />
            <title>{title || data.sanityWebsiteSettings?.title}</title>

            {/* Fav Icons */}
            <link rel="icon" href={svgFavicon || undefined} type="image/svg+xml" />

            {/* Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta name="description" content={data.sanityWebsiteSettings?.description || 'Default description'} />

            <meta name="keywords" content={data.sanityWebsiteSettings?.keywords || 'Default keywords'} />
            
            {/* Open Graph */}
            {location && <meta property="og:url" content={location.href} />}
            <meta property="og:image" content={sitePreview || undefined} />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:site_name" content={data.sanityWebsiteSettings?.title} key="ogsitename" />
            <meta property="og:description" content={templateDescription ?? data.sanityWebsiteSettings?.description} key="ogdesc" />
            {children}
        </Helmet>
    );
};
