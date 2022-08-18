import styled, { keyframes } from "styled-components";
import { AccordionStylingProps } from "./Accordion";


const showBox = keyframes`
    0% {
        transform: scaleY(0);
    }
    100% {
        transform: scaleY(1);
    }
`

const showText = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-2%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const AccordionStyles = styled.div<AccordionStylingProps>`
    margin-bottom: var(--spacingMedium);
    width: 100%;
    .wrapper {}

    .item {
        &[open] {
            .itemTitle {
                font-weight: bold;
            }
            .itemTitle::after {
                transform: rotate(90deg);
            }
            .itemTitle:focus-visible {
                color: black;
                background-color: white;
                border: none;
                outline: none;
            }
            .descWrapper {
                display: block;
            }
        }
        
    }

    .itemTitle {
        padding: 0 var(--spacingMedium);
        cursor: pointer;
        list-style: none;
        position: relative;
        font-size: var(--fontSizeRegular);

        &:focus-visible {
            color: white;
            background-color: var(--colorActive);
            border: none;
            outline: none;
        }
    }

    .itemTitle::after {
        content: '>';
        position: absolute;
        left: var(--spacingSmall);
        transition: transform 0.1s ease-in-out;
    }

    .descWrapper {
        margin-left: var(--spacingSmall);
        display: none;
        transform: scaleY(0);
        transform-origin: 0 0;
        animation: 0.2s ease-in-out 1 forwards ${showBox};
        padding: var(--spacingSmall);
        background-color: var(--colorActive);
        color: white;
        margin-bottom: var(--spacingSmall);
        border-radius: var(--borderRadius);
    }

    .description {
        opacity: 0;
        margin: 0;
        animation: 0.2s 0.4s ease-in 1 forwards ${showText};
    }
`;
