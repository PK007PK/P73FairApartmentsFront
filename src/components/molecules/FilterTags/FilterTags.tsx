import React, { FC } from 'react';
import { Link } from 'gatsby';
import { pathCheck } from 'src/utils/pathCheck';
import { tagsUsed } from 'src/hooks/tagsUsed';
import { FilterTagsStyle } from './FilterTags.style';
import { useFilterTagsGraphQLData } from './useFilterTagsGraphQLData'

export const FilterTags: FC<{location: Location}> = ({ location }): JSX.Element => {
    const counts = tagsUsed();
    const tags = useFilterTagsGraphQLData();

    return (
        <FilterTagsStyle>
            {tags.map((tag) => {
                if (counts[tag.name] > 0) {
                    return (
                        <Link
                            to={`/${tag.slug.current}/1#blog`}
                            style={pathCheck(location, tag.slug.current) ? { color: 'var(--colorActiveSecondary)' } : null}
                            key={tag.slug.current}
                        >
                            {tag.name} ({counts[tag.name]})
                        </Link>
                    );
                }
            })}
        </FilterTagsStyle>
    );
}
