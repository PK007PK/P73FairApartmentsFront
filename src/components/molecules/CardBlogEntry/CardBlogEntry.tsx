import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Logo } from 'components/atoms/Logo/Logo';
import { CardBlogEntryStyle } from './CardBlogEntry.style';

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
    small?: boolean,
}

export const CardBlogEntry: React.FunctionComponent<Props> = ({ data, small }) => {
    const { name, date } = data;

    const gatsbyImageData = data?.image?.asset?.gatsbyImageData;

    return (
        <CardBlogEntryStyle small={small}>
            <div className="imgWrapper">
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
                <time className="time" dateTime={date}>
                    {date}
                </time>
            </div>
        </CardBlogEntryStyle>
    );
};
