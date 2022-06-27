import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Logo } from 'components/atoms/Logo/Logo';
import { CardBlogEntrySmallBoxStyle } from './CardBlogEntrySmallBox.style';

interface Props {
    data: {
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
    },
}

export const CardBlogEntrySmallBox: React.FunctionComponent<Props> = ({ data }) => {
    const { name, date, lead } = data;

    const gatsbyImageData = data?.image?.asset?.gatsbyImageData;

    return (
        <CardBlogEntrySmallBoxStyle>
            <div className="imgWrapper">
                <time className="time" dateTime={date}>
                    {date}
                </time>
                {gatsbyImageData ? (
                    <GatsbyImage
                        className="picture"
                        image={gatsbyImageData}
                        placeholder='blurred'
                        alt={name}
                        formats={['auto', 'webp']}
                        quality={50}
                    />
                ) : (
                    <Logo />
                )}
            </div>
            <div className="textWrapper">
                <h3 className="title">{name}</h3>
                <p>{lead}</p>
            </div>
        </CardBlogEntrySmallBoxStyle>
    );
};
