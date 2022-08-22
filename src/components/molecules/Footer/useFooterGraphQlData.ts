import { useStaticQuery, graphql } from 'gatsby';


interface GraphQlData {
    sanityWebsiteSettings: {
        copyright: string,
    },
}

export function useFooterGraphQlData(): string {
    const data: GraphQlData = useStaticQuery(graphql`
        {
            sanityWebsiteSettings {
                copyright
            }
        }
    `);
    
    const copyRightName = data.sanityWebsiteSettings.copyright;
    return copyRightName;
}
