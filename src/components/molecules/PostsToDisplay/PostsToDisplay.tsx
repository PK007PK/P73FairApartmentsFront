import React from 'react';
import { Link } from 'gatsby';

import { CardBlogEntry } from 'components/molecules/CardBlogEntry/CardBlogEntry';
import { PostsToDisplayStyles } from './PostsToDisplay.style';

type DataItem = {
    slug: {
        current: string,
    },
    name: string,
    date: string,
}

interface Props {
    data: DataItem[],
}

export const PostsToDisplay: React.FunctionComponent<Props> = ({ data }): JSX.Element => (
    <PostsToDisplayStyles>
        {data
            .filter((item) => item.date !== null)
            .map((item) => (
                <Link key={item.slug.current} to={`/${item.slug.current}`}>
                    <CardBlogEntry data={item} />
                </Link>
            ))}
    </PostsToDisplayStyles>
);

