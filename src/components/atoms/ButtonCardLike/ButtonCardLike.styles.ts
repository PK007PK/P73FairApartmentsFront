import styled from "styled-components";
import { ThemeEntity } from "styles/Theme";
import { CommonProps } from "types/commonProps";

interface Props extends CommonProps {
    color?: string, 
    backgroundColor?: string,
}

export const ButtonCardLikeStyles = styled.button<Props>`
    border-radius: var(--borderRadius);
    font-size: var(--fontSizeLead);
    transition: var(--transitionBasic);
    background-color: var(--colorActivePrimary);
    color: var(--colorWhite);
    height: 150px;
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp4};
    }

    svg {
        width: 40px;
        height: 50px;
        margin-right: 10px;
    }

    .title {
        margin: 0;
    }
`;
