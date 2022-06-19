import styled from 'styled-components';

export const FormContactStyle = styled.form`
    input,
    textarea {
        width: 100%;
        padding: var(--paddingInput);
    }

    label {
        padding-top: 35px;
    }

    button {
        padding: var(--paddingButton);
        margin: var(--spacingRegular) 0 var(--spacingMedium) 0;
    }

    .wrapper {
        margin-top: 15px;
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
