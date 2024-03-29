import { useStaticQuery, graphql } from 'gatsby';
import { SanityQuery } from 'src/types/sanityQuery';

export function websiteOwnerFormalNameCheck(): string {
    const data: SanityQuery = useStaticQuery(graphql`
        {
            sanityWebsiteSettings {
                websiteOwnerFormalName
            }
        }
    `);

    const { websiteOwnerFormalName } = data.sanityWebsiteSettings;
    return websiteOwnerFormalName ?? 'John Smith';
}