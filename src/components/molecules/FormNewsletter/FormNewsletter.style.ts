import styled from "styled-components";

export const FormNewsletterStyle = styled.div`
    input {
        width: 100%;
        outline: none;
        border: 1px solid gray;
        font-size: 1em;
        transition: 100ms;
        border-radius: 0px;
        padding: 10px 25px;
    }

    .acceptPolicy {
        margin-top: var(--spacingRegular);
        margin-bottom: 20px;
        display: flex;
        align-items: flex-start;
    }

    .check {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        float: left;
        flex-shrink: 0;
        margin-top: 5px;
    }

    .text {
        margin-top: 0;
        font-size: var(--fontSizeSmall);
        text-align: left;
    }
`;

