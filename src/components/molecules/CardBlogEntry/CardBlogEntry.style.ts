import styled, { css } from 'styled-components';
import { ThemeEntity } from 'styles/Theme';
import { CommonProps } from 'types/commonProps';
import { StylingProps } from 'types/stylingProps';

interface Props extends CommonProps {
    small?: boolean,
}

export const CardBlogEntryStyle = styled.div<Props>`
    position: relative;
    margin-bottom: var(--spacingMedium);
    transition: var(--transitionBasic);
    border-radius: var(--borderRadius);

    ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
        display: flex;
        flex-direction: ${({ small }) => (small ? 'column' : 'row')};
    }

    &:hover {
        box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp4};
    }

    .imgWrapper,
    .picture {
        height: 220px;
        width: 100%;

        ${({ theme }) => theme.media.smAbove} {
            width: ${({ small }) => (small ? '100%' : '300px')};
            height: ${({ small }) => (small ? '170px' : '220px')};
        }

        background-position: cover;
        flex-shrink: 0;
        border-radius: var(--borderRadius);
    }

    .imgWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .textWrapper {
        padding: var(--cardPadding);

        ${({ small }) =>
            small &&
            css`
                display: none;
            `}
    }

    .title {
        font-size: ${({ small }) => (small ? '15px' : '25px')} !important;
    }
`;
