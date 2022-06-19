import styled from 'styled-components';
import { ThemeEntity } from 'styles/Theme';

export const PaginationStyle = styled.div`
    margin-top: var(--spacingRegular);
    display: flex;
    flex-wrap: wrap;

    & > * {
        display: inline-block;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: var(--transitionBasic);

        &:hover,
        &[aria-current],
        &.current {
            box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp8};
            background-color: var(--colorDarkGray);
            color: var(--colorWhite);
            border: none;
        }
    }

    & > *:not(:last-child) {
        margin-right: var(--spacingSmall);
    }
`;
