import React, { useContext } from "react";
import { Link } from "gatsby";
import { AppContext } from "src/AppProvider";

import { Sling as Hamburger } from "hamburger-react";
import {
  BootsContainer,
  BootsRow,
  BootsColumn,
} from "src/components/atoms/BootsElements/BootsElements";

import { Logo } from "src/components/atoms/Logo/Logo";
import { MenuItemsList } from "src/components/molecules/MenuItemsList/MenuItemsList";
import { Search } from "src/components/organisms/search";
import { MenuDropDown } from "../MenuDropDown/MenuDropDown";

import { NavbarStyle } from "./Navbar.style";
import { ButtonLogout } from "src/components/molecules/ButtonLogout/ButtonLogout";

const searchIndices = [{ name: `Pages`, title: `Pages` }];

export const Navbar: React.FunctionComponent = (): JSX.Element => {
  const { toogleIsMenuActive, isMenuActive, diseableMenu } =
    useContext(AppContext);

  return (
    <NavbarStyle isMenuActive={isMenuActive}>
      <BootsContainer>
        <BootsRow>
          <BootsColumn>
            <div className="innerWrapper">
              <Link
                onClick={diseableMenu}
                style={{ textDecoration: "none" }}
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
                <ButtonLogout />
                <Hamburger toggled={isMenuActive} toggle={toogleIsMenuActive} />
              </div>
              {isMenuActive && <MenuDropDown />}
            </div>
          </BootsColumn>
        </BootsRow>
      </BootsContainer>
    </NavbarStyle>
  );
};
