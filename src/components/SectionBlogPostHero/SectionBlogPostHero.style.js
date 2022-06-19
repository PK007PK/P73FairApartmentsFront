import styled, { css } from 'styled-components';

export const SectionBlogPostHeroStyle = styled.header`
    margin-top: 109px;
    p {
        margin-top: 0;
    }

    .leftSide {
        display: flex;
        align-items: flex-end;
        margin-bottom: var(--spacingRegular);
    }

    .imgWrapper {
        border: 1px solid gray;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pict {
        height: 100%;
    }
`;
