import styled from 'styled-components';
import { CommonProps } from 'types/commonProps';
import { ThemeEntity } from 'styles/Theme';
import { StylingProps } from 'types/stylingProps';

interface Props extends CommonProps {}

export const MenuItemsListStyle = styled.ul<Props>`
    display: none;

    ${({ theme }: {theme: ThemeEntity}) => theme.media.mdAbove} {
        align-items: center;
        display: flex;
        margin-left: auto;
        list-style-type: none;
        display: flex;
    }

    li:not(:last-child) {
        margin-right: var(--spacingMedium);
    }

    li {
        font-weight: 400;
    }

    .active {
        color: var(--colorActive1);
    }
`;
