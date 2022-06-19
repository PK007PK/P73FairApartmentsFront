import styled from 'styled-components';
import { ThemeEntity } from 'styles/Theme';
import { CommonProps } from 'types/commonProps';
import { StylingProps } from 'types/stylingProps';

interface Props extends CommonProps {
    isMenuActive?: boolean;
}

export const NavbarStyle = styled.nav<Props>`
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    padding: var(--spacingRegular) 10px;
    background-color: rgba(255, 255, 255, 0.8);
    position: ${({ isMenuActive }) => (isMenuActive ? 'fixed' : 'absolute')};

    .innerWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .logoWrapper {
        display: flex;
        align-items: center;
    }

    .menuList {
        display: none;
        ${({ theme }: {theme: ThemeEntity}) => theme.media.mdAbove} {
            align-items: center;
            display: flex;
            margin-left: auto;
        }
    }

    li {
        list-style: none;
        margin-right: 20px;
        z-index: 10;
    }

    .desktopLinksWrapper {
        display: none;
        margin-left: auto;
        ${({ theme }: {theme: ThemeEntity}) => theme.media.mdAbove} {
            display: flex;
            align-items: center;
        }
    }

    .burgerWrapper {
        margin-left: 10px;
    }

    .logoWrapper,
    .burgerWrapper {
        z-index: 10;
    }
`;
