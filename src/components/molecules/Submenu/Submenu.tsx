import React from 'react';
import { Link } from 'gatsby';
import { SubmenuStyle } from './Submenu.style';
import { CommonProps } from 'types/commonProps';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface NodeData {
    name: string,
    position?: number,
    slug: {
        current: string,
    },
    lead?: string,
    date?: string,
    image?: {
        asset?: {
            gatsbyImageData?: IGatsbyImageData,
        }
    }
}

interface MenuItem {
    pageSlug: string,
    pageName: string,
}

interface Props extends CommonProps {
    data: NodeData[] | MenuItem[],
    name: string,
    checkObject?: Object,
}

export const Submenu: React.FunctionComponent<Props> = ({ data, name, onClick, checkObject }): JSX.Element => {
    
    return (
        <SubmenuStyle>
            <h2 className="submenuTitle">{name}</h2>
            <ul className="submenuList">
                {data.map((item, i) => {
                    if (!checkObject) {
                        return (
                            <li key={i} className="submenuItem">
                                <Link
                                    className="fx-txt-underline"
                                    to={item.pageSlug || `/${item.slug.current}/1#blog`}
                                    onClick={onClick}
                                >
                                    {item.pageName}
                                </Link>
                            </li>
                        );
                    };
                    if (checkObject[item.name] > 0) {
                        return (
                            <li key={i} className="submenuItem">
                                <Link
                                    className="fx-txt-underline"
                                    to={item.pageSlug || `/${item.slug.current}/1#blog`}
                                    onClick={onClick}
                                >
                                    {item.name} ({checkObject[item.name]})
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </SubmenuStyle>
    )
};
