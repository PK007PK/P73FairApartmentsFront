import styled from 'styled-components';
import { ThemeEntity } from 'styles/Theme';
import { CommonProps } from 'types/commonProps';

interface Props extends CommonProps {
}

export const CardApartmentEntryStyle = styled.div<Props>`
    position: relative;
    margin-bottom: var(--spacingMedium);
    transition: var(--transitionBasic);

    ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
        display: flex;
    }

    &:hover {
        box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp4};
    }

    .imgWrapper,
    .picture {
        height: 220px;
        width: 100%;

        ${({ theme }) => theme.media.smAbove} {
            width: 300px;
            height: 250px;
        }

        background-position: cover;
        flex-shrink: 0;
    }

    .imgWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .textWrapper {
        padding: var(--cardPadding);
    }

    .mapWrapper {
        margin-left: auto;
    }

    .title {
        font-size: 25px;
    }
`;
