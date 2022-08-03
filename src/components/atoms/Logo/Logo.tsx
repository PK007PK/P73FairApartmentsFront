import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledLogo } from './Logo.style';
import logoSign from 'assets/images/house-user-solid.svg';

interface QueryStructure {
    sanityWebsiteSettings: {
        copyright: string;
    }
}

export const Logo: React.FunctionComponent = (): JSX.Element => {

    const {  sanityWebsiteSettings: {copyright = "Abc"} }: QueryStructure = useStaticQuery(graphql`
        {
            sanityWebsiteSettings {
                copyright
            }
        }
    `);

    return (
        <StyledLogo>
            <img className="sign" src={logoSign} alt={copyright} />
            <div className="textBlock">
                <div className="top">FairApartments</div>
            </div>
        </StyledLogo>
    )
};

