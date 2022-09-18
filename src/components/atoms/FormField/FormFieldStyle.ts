import { CommonProps } from "src/types/commonProps";
import styled from "styled-components";
import { FormFieldStylingProps } from "./FormField";

export const WrapperStyle = styled.div<CommonProps>`
    width: 100%;
    margin: var(--spacingSmall) 0;

    .title {
        margin-bottom: var(--spacingXSmall);
    }
`;

export const TagStyle = styled.input<FormFieldStylingProps>`
    padding: var(--spacingXSmall);
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }

`;