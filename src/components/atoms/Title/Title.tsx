import React from 'react'
import { CommonProps } from "types/commonProps";
import { TitleStyles } from "./Title.styles";

interface Props extends CommonProps {
    as?: React.ElementType,
    spacing?: boolean,
    center?: boolean,
}

export const Title: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {
        children, 
        as, 
        spacing,
        center,
    } = props;

    return (
        <TitleStyles 
            as={as} 
            spacing={spacing}
            center={center}
        >
            {children}
        </TitleStyles>
    )
}