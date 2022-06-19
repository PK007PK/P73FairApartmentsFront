import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Logo } from 'components/atoms/Logo/Logo';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/atoms/BootsElements/BootsElements.ts';

import { SectionBlogPostHeroStyle } from './SectionBlogPostHero.style';

const SectionBlogPostHero = ({ leftComponent, data }) => {
    const LeftComponent = leftComponent;
    return (
        <BootsContainer>
            <SectionBlogPostHeroStyle>
                <BootsRow between style={{ marginTop: '50px' }}>
                    <BootsColumn md={6} className="leftSide">
                        <LeftComponent />
                    </BootsColumn>
                    <BootsColumn md={6}>
                        <div className="imgWrapper">
                            {data ? (
                                <GatsbyImage
                                    className="pict"
                                    image={data}
                                    formats={['auto', 'webp']}
                                    quality={100}
                                    height={500}
                                    alt=""
                                />
                            ) : (
                                <Logo />
                            )}
                        </div>
                    </BootsColumn>
                </BootsRow>
            </SectionBlogPostHeroStyle>
        </BootsContainer>
    );
};

export default SectionBlogPostHero;
