import styled, { css } from 'styled-components';
import { ThemeEntity } from 'src/styles/Theme';
import { CommonProps } from 'src/types/commonProps';

interface Props extends CommonProps {
}

export const CardBlogEntrySmallBoxStyle = styled.div<Props>`
    position: relative;
    margin-bottom: var(--spacingMedium);
    transition: var(--transitionBasic);
    min-height: 320px;
    flex-basis: 30%;
    flex-shrink: 0;
    flex-grow: 0;

    &:hover {
        box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp4};
    }

    .imgWrapper,
    .picture {
        height: 220px;
        width: 100%;

        ${({ theme }) => theme.media.smAbove} {
            height: 220px;
        }

        background-position: cover;
        flex-shrink: 0;
    }

    .imgWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .time {
        position: absolute;
        background-color: white;
        top: 10px;
        left: 8px;
        z-index: 1;
        padding: 2px 5px;
        border-radius: var(--borderRadius);
    }

    .textWrapper {
        position: relative;
        background-color: white;
        width: 100%;
        padding: var(--cardPadding);
    }

    .title {
        font-size: 20px;
    }
`;
