import React from 'react';
import { Link } from 'gatsby';
import { CommonProps } from 'src/types/commonProps';
import { PaginationStyle } from './Pagination.style';

interface Props extends CommonProps {
    pageSize: number,
    totalCount: number, 
    currentPage: number, 
    base: string,
}

export const Pagination: React.FunctionComponent<Props> = (props): JSX.Element => {

    const { pageSize, totalCount, currentPage, base, className, style } = props;
    const totalPages = Math.ceil(totalCount / pageSize);

    return (
        <PaginationStyle style={style} className={className}>
            {Array.from({ length: totalPages }).map((_, i) => (
                <Link
                    className={currentPage === i + 1 ? 'current' : ''}
                    to={`${base}${i >= 0 ? i + 1 : ''}#blog`}
                    key={`page${i}`}
                >
                    {i + 1}
                </Link>
            ))}
        </PaginationStyle>
    );
}
