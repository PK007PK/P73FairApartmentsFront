import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { AppContext } from 'src/AppProvider';

import { BootsContainer, BootsRow, BootsColumn } from 'src/components/atoms/BootsElements/BootsElements';
import { CardBlogEntry } from 'src/components/molecules/CardBlogEntry/CardBlogEntry';
import { Submenu } from 'src/components/molecules/Submenu/Submenu';

import { categoriesUsed } from 'src/hooks/categoriesUsed';
import { tagsUsed } from 'src/hooks/tagsUsed';
import { languageCheck } from 'src/hooks/languageCheck';

import { MenuDropDownStyles } from './MenuDropDown.styles';
import { menuDropDownTexts } from './MenuDropDown.texts';
import { useMenuDropDownGraphQLData } from './useMenuDropDownGraphQLData';

export const MenuDropDown: React.FunctionComponent = (): JSX.Element => {

    const { isMenuActive, diseableMenu } = useContext(AppContext);
    const {
        menuData,
        categories,
        tags,
        posts,
    } = useMenuDropDownGraphQLData();
    let menuWrapper = useRef(null);
    const lang = languageCheck();

    useEffect(() => {
        gsap.to(menuWrapper, { duration: 0.3, css: { display: 'block', top: 0 } });
    }, [isMenuActive]);

    return (
        <MenuDropDownStyles ref={(el) => (menuWrapper = el)}>
            <BootsContainer className="container">
                <nav>
                    <BootsRow className="submenuBar">
                        <BootsColumn sm={4}>
                            <Submenu 
                                onClick={diseableMenu} 
                                name="Sites" 
                                data={menuData} 
                            />
                        </BootsColumn>
                        <BootsColumn sm={4}>
                            <Submenu
                                onClick={diseableMenu}
                                name="Categories"
                                data={categories}
                                checkObject={categoriesUsed()}
                            />
                        </BootsColumn>
                        <BootsColumn sm={4}>
                            <Submenu 
                                onClick={diseableMenu} 
                                name="Tags" 
                                data={tags} 
                                checkObject={tagsUsed()} 
                            />
                        </BootsColumn>
                    </BootsRow>
                    <BootsRow className="latestArticlesTitleBar">
                        <BootsColumn sm={4}>
                            <h2 className="postsHeader">{menuDropDownTexts.title[lang]}</h2>
                        </BootsColumn>
                    </BootsRow>
                    <BootsRow className="postsBar">
                        {posts.map((item, i) => (
                            <BootsColumn key={i} sm={4}>
                                <Link onClick={diseableMenu} to={`/${item.slug.current}`}>
                                    <CardBlogEntry small data={item} />
                                </Link>
                            </BootsColumn>
                        ))}
                    </BootsRow>
                </nav>
                <BootsRow />
            </BootsContainer>
            <div className="colorWrapper1" />
            <div className="colorWrapper2" />
        </MenuDropDownStyles>
    );
};
