import styled from "styled-components";
import { FormApartmentStylingProps } from "./FormApartment";

export const FormApartmentStyle = styled.div<FormApartmentStylingProps>`
    position: relative;
    width: 100%;

    .loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .deleteBtn {
        margin-top: var(--spacingSmall);
    }
`