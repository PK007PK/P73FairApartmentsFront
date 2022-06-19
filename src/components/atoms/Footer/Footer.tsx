import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FooterStyles } from './Footer.style';

interface SanityQuery {
    sanityWebsiteSettings: {
        copyright: string,
    },
}

export const Footer: React.FunctionComponent = (): JSX.Element => {
    const query: SanityQuery = useStaticQuery(graphql`
        {
            sanityWebsiteSettings {
                copyright
            }
        }
    `);

    const { copyright: copyRightName } = query.sanityWebsiteSettings;

    return (
        <FooterStyles>
            <BootsContainer between>
                <BootsRow>
                    <BootsColumn sm={6}>
                        <Link to="/polityka">Privacy Policy</Link>
                    </BootsColumn>
                    <BootsColumn className="copyright" sm={6}>
                        &copy; {copyRightName} {new Date().getFullYear()}
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </FooterStyles>
    );
}
