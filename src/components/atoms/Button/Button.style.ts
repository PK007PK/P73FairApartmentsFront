import styled from 'styled-components';
import { CommonProps } from 'types/commonProps';

interface Props extends CommonProps {
    full?: boolean,
    secondary?: boolean,
    type?: 'submit',
    disabled?: boolean,
}

export const ButtonStyle = styled.button<Props>`
    background-color: ${({ secondary }) => (secondary ? 'var(--colorActiveSecondary)' : 'var(--colorActivePrimary)')};
    color: var(--colorWhite);
    padding: var(--spacingSmall) var(--spacingMedium);
    text-shadow: var(--txtShadow);
    font-size: var(--fontSizeLead);
    transition: var(--transitionBasic);
    border: none;
    text-align: center;

    ${({ full }) =>
        full &&
        `
            width: 100%;
        `}

    &:disabled, &:disabled &:active {
        opacity: 0.5;
        pointer-events: none;
    }

    &:hover {
        box-shadow: var(--hoverShadow);
    }

    &:active {
        background-color: white;
        color: black;
    }

    .icon {
        margin-right: 5px;
    }
`;
