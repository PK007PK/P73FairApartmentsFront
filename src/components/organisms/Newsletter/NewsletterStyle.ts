import styled from 'styled-components';
import { ThemeEntity } from 'styles/Theme';

export const NewsletterStyle = styled.div`
    text-align: center;
    padding: var(--spacingMedium) var(--cardPadding);
    position: relative;
    margin-bottom: var(--spacingMedium);
    background-color: rgba(0, 96, 100, 0.3);
    position: relative;
    border-radius: var(--borderRadius);
    box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp4};
    position: relative;

    .openBtn {
        cursor: pointer;
    }

    .closeBtn {
        cursor: pointer;
        position: absolute;
        top: -20px;
        right: var(--cardPadding);
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 1px solid black;
        z-index: 100;
    }
`;
