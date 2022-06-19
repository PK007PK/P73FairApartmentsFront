import styled from 'styled-components';
import { ThemeEntity } from 'styles/Theme';

export const FooterStyles = styled.footer`
    padding: var(--spacingSmall) 0;
    color: var(--colorWhite);
    background-color: var(--colorDarkGray);

    .copyright {
        text-align: left;

        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            text-align: right;
        }
    }
`;
