import React, { FC } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MenuItemsListStyle } from './MenuItemsList.style';
import { CommonProps } from 'types/commonProps';
import { SanityQuery } from 'types/sanityQuery';

interface Props extends CommonProps {}
interface QueryStructure {
    sanityMenuData: {
        menuItems: {
            pageSlug: string,
            pageName: string,
        }[],
    },
}

export const MenuItemsList: React.FunctionComponent<Props> = ({ style, className, onClick }): JSX.Element => {
    const data: QueryStructure = useStaticQuery(graphql`
        query QueryMenuItems {
            sanityMenuData {
                menuItems {
                    pageSlug
                    pageName
                }
            }
        }
    `);

    const menuData = data.sanityMenuData.menuItems;

    return (
        <MenuItemsListStyle style={style} className={className}>
            {menuData.map((item, i) => (
                <li key={i}>
                    <Link
                        className="fx-txt-underline"
                        onClick={onClick}
                        activeClassName="active"
                        activeStyle={{ color: 'var(--colorActiveSecondary)' }}
                        to={item.pageSlug}
                    >
                        {item.pageName}
                    </Link>
                </li>
            ))}
        </MenuItemsListStyle>
    );
};
