import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import logoSign from 'assets/images/house-user-solid.svg';
import { StyledLogo } from './Logo.style';

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

