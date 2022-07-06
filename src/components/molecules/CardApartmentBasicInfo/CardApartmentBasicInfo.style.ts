import styled, { css } from 'styled-components';
import { ThemeEntity } from 'styles/Theme';
import { CommonProps } from 'types/commonProps';

interface Props extends CommonProps {
}

export const CardApartmentBasicInfoStyle = styled.button<Props>`
    border: none;
    padding: 0;
    margin-bottom: var(--spacingMedium);
    transition: var(--transitionBasic);
    width: 220px;

    &:hover {
        box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp4};
    }

    .imgWrapper,
    .picture {
        height: 220px;
        width: 220px;
        background-position: cover;
    }

    .imgWrapper {
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .textWrapper {
        position: relative;
        background-color: white;
        padding: var(--cardPadding);
        width: 220px;
    }

    .title {
        font-size: 20px;
    }
`;
