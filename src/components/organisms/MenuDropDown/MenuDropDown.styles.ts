import styled from 'styled-components';
import { ThemeEntity } from 'styles/Theme';
import { CommonProps } from 'types/commonProps';
import { StylingProps } from 'types/stylingProps';

interface Props extends CommonProps {}

export const MenuDropDownStyles = styled.div<Props>`
    position: fixed;
    display: none;
    z-index: 5;
    top: -100vh;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--colorWhite);
    min-height: 100vh;
    text-align: center;

    .container {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            margin-top: 50px;
        }
    }

    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex-shrink: 0;
    }

    .submenuTitle,
    .postsHeader {
        font-size: 18px;

        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            text-align: center;
            font-size: 22px;
        }
    }

    .submenuBar {
        margin-bottom: 20px;
    }

    .submenu {
    }

    .submenuTitle {
    }

    .submenuList {
        display: flex;
        flex-wrap: wrap;
        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            display: block;
        }
        padding: 0;
        padding-left: 0;
        margin-left: 0;
        min-width: 150px;
        flex-grow: 1;
        font-size: 140px;

        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            font-size: 16px;
        }
    }

    .submenuItem {
        font-size: 14px;
        display: block;
        margin-bottom: 10px;
        margin-right: 20px;

        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            margin-right: 0px;
            margin-bottom: var(--spacingRegular);
        }
    }

    .latestArticlesTitleBar {
    }

    .postsHeader {
        display: none;
        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            display: block;
            text-align: center;
            margin-bottom: 20px;
            line-height: 100%;
        }
    }

    .postsBar {
        display: none;

        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            display: flex;
        }
    }

    @keyframes emerge {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .title,
    a {
        opacity: 0;
        animation-name: emerge;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    .colorWrapper1 {
        background-color: var(--colorActivePrimary);
        height: 30vh;
    }
    .colorWrapper2 {
        background-color: var(--colorActiveSecondary);
        height: 30vh;
    }
`;
