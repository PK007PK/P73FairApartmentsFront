import React, { FC, useContext } from 'react';
import { Link } from 'gatsby';

import { Sling as Hamburger } from 'hamburger-react';

import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { MenuDropDown } from 'components/organisms/MenuDropDown/MenuDropDown';
import { Logo } from 'components/atoms/Logo/Logo';
import { Search } from 'components/search';
import { AppContext } from 'AppProvider';
import { MenuItemsList } from 'components/molecules/MenuItemsList/MenuItemsList';

import { NavbarStyle } from './Navbar.style';

const searchIndices = [{ name: `Pages`, title: `Pages` }];

export const Navbar: React.FunctionComponent = (): JSX.Element => {
    const { toogleIsMenuActive, isMenuActive, diseableMenu } = useContext(AppContext);

    return (
        <NavbarStyle isMenuActive={isMenuActive}>
            <BootsContainer>
                <BootsRow>
                    <BootsColumn>
                        <div className="innerWrapper">
                            <Link
                                onClick={diseableMenu}
                                style={{ textDecoration: 'none' }}
                                className="logoWrapper"
                                to="/"
                            >
                                <Logo />
                            </Link>

                            <div className="desktopLinksWrapper">
                                <MenuItemsList onClick={diseableMenu} />
                                <Search indices={searchIndices} />
                            </div>

                            <div className="burgerWrapper">
                                <Hamburger toggled={isMenuActive} toggle={toogleIsMenuActive} />
                            </div>

                            {isMenuActive && <MenuDropDown />}
                        </div>
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </NavbarStyle>
    );
}
