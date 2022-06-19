import { useStaticQuery, graphql } from 'gatsby';
import { languageInterface } from 'types/languageInterface';
import { SanityQuery } from 'types/sanityQuery';

export function languageCheck(): string {
    const data: SanityQuery = useStaticQuery(graphql`
        {
            sanityWebsiteSettings {
                lang
            }
        }
    `);

    const { lang } = data.sanityWebsiteSettings;
    return lang ?? languageInterface.eng;
}
