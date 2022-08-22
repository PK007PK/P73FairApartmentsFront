import styled from 'styled-components';
import { ThemeEntity } from 'styles/Theme';
import { CommonProps } from 'types/commonProps';

interface Props extends CommonProps {}

export const FooterStyles = styled.footer<Props>`
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
