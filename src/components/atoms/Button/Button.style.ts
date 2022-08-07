import styled from 'styled-components';
import { CommonProps } from 'types/commonProps';

interface Props extends CommonProps {
    full?: boolean,
    secondary?: boolean,
    color?: string,
    padding?: string,
    type?: 'submit',
    disabled?: boolean,
}

export const ButtonStyle = styled.button<Props>`
    background-color: ${({ secondary }) => (secondary ? 'var(--colorActiveSecondary)' : 'var(--colorActivePrimary)')};
    color: ${({ color }) => color || 'white'};
    padding: ${({ padding }) => padding || ' var(--spacingSmall) var(--spacingMedium)'};
    text-shadow: var(--txtShadow);
    font-size: var(--fontSizeLead);
    transition: var(--transitionBasic);
    border: none;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;

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
        text-shadow: 1px 1px black;
    }

    .icon {
        margin-right: 5px;
    }
`;
