import React from 'react';
import { Link } from 'gatsby';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/atoms/BootsElements/BootsElements';
import { FooterStyles } from './Footer.style';
import { useFooterGraphQlData } from './useFooterGraphQlData';

export const Footer: React.FunctionComponent = (): JSX.Element => {
   
    const copyRightName = useFooterGraphQlData();

    return (
        <FooterStyles>
            <BootsContainer between>
                <BootsRow>
                    <BootsColumn sm={6}>
                        <Link to="/polityka">Privacy Policy</Link>
                    </BootsColumn>
                    <BootsColumn className="copyright" sm={6}>
                        <>&copy; {copyRightName} {new Date().getFullYear()}</>
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </FooterStyles>
    );
}
