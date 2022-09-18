import React from 'react'
import { CommonProps } from 'src/types/commonProps';
import { TitleStyles } from "./Title.styles";

interface Props extends CommonProps {
    as?: React.ElementType,
    spacing?: boolean,
    center?: boolean,
}

export const Title: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {
        as, 
        center,
        children, 
        className,
        spacing,
        style,
    } = props;

    return (
        <TitleStyles 
            as={as} 
            spacing={spacing}
            center={center}
            className={className}
            style={style}
        >
            {children}
        </TitleStyles>
    )
}