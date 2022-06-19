import styled from 'styled-components';

export const FilterCategoryStyle = styled.div`
    a {
        margin-right: var(--spacingRegular);
        text-decoration: none;

        &:hover {
            color: var(--colorActiveSecondary);
        }
    }

    .title {
        display: inline-block;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
    }
`;
