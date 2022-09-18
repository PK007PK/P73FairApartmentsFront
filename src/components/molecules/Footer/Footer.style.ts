import styled from 'styled-components';
import { ThemeEntity } from 'src/styles/Theme';
import { CommonProps } from 'src/types/commonProps';

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
