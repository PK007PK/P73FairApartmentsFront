import styled from 'styled-components';

export const ArticleStyling = styled.article`
    h1,
    h2,
    h3,
    h4 {
        margin-top: var(--spacingMedium);
    }

    h1:first-of-type,
    h2:first-of-type {
        margin-top: 0;
    }

    p,
    ul,
    li {
        font-weight: 500;
        font-size: 16px;
    }

    ul {
        padding-left: var(--spacingMedium);
    }

    blockquote {
        margin-top: 40px;
        margin-bottom: 40px;
        display: block !important;
        font-style: italic;
        line-height: 2;
        background: #f9f9f9;
        border-left: 10px solid #ccc;
        padding: 0.5em 20px;
    }
`;
