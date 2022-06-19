import styled from 'styled-components';
import { ThemeEntity } from 'styles/Theme';

export const CardContactFormStyle = styled.div`
    margin-bottom: var(--spacingMedium);
    position: relative;

    .openingButton {
        background-color: #006064;
        color: white;
        font-size: var(--fontSizeLead);
        min-height: 180px;
        padding: var(--spacingMedium) var(--cardPadding);
        width: 100%;
        border-radius: var(--borderRadius);
        font-size: var(--fontSizeRegular);
        line-height: 1.4;
        border: none;
        transition: var(--transitionBasic);

        &:hover {
            box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp4};
        }

        .innerWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon {
            width: 50px;
            height: 60px;
        }
    }

    .openedCard {
        position: relative;
        text-align: center;
        padding: var(--spacingMedium) var(--cardPadding);
        margin-bottom: var(--spacingMedium);
        background-color: rgba(0, 96, 100, 0.3);

        border-radius: var(--borderRadius);
        box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp4};
    }

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

    input,
    textarea {
        width: 100%;
        outline: none;
        border: 1px solid gray;
        font-size: 1em;
        transition: 100ms;
        border-radius: 0px;
        padding: 10px 25px;
    }

    .policy {
        margin-bottom: 20px;

        input {
            margin-top: 10px;
            margin-right: 15px;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
        }
        display: flex;
        align-items: flex-start;
    }
`;
