import { useStaticQuery, graphql } from 'gatsby';

export function useNewsletterGraphQLData():string {
    const data = useStaticQuery(graphql`
        {
            sanityThirdPartyServicesIntegration {
                mailchimpURL
            }
        }
    `);
    
    const url = data?.sanityThirdPartyServicesIntegration?.mailchimpURL ?? `default_url`;
    return url;
}