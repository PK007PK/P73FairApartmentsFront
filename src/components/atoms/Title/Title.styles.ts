import styled from "styled-components";
import { CommonProps } from "src/types/commonProps";

interface Props extends CommonProps {
    as?: React.ElementType,
    spacing?: boolean,
    center?: boolean,
}
// --spacingSmall

export const TitleStyles = styled.h1<Props>`
    padding: ${({spacing}) => spacing ? "0 var(--spacingSmall)" : null };
    text-align: ${({center}) => center ? "center" : null };
    margin-bottom: var(--spacingSmall);
`;
