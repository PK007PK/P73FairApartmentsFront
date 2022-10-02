import { useStaticQuery, graphql } from 'gatsby';
import { languageInterface } from 'src/types/languageInterface';
import { SanityQuery } from 'src/types/sanityQuery';

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
