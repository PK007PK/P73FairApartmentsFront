import React from 'react'
import { CommonProps } from "src/types/commonProps";
import { ButtonCardLikeStyles } from "./ButtonCardLike.styles";

interface Props extends CommonProps {
    title: string, 
    iconComponent?: React.ElementType,
    color?: string, 
    backgroundColor?: string,
}

export const ButtonCardLike: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {
        title, 
        iconComponent: IconComponent, 
        onClick, 
        color, 
        backgroundColor, 
        className, 
        style, 
        children,
    } = props;

    return (
        <ButtonCardLikeStyles 
            onClick={onClick} 
            color={color} 
            backgroundColor={backgroundColor}
            className={className}
            style={style}
        >
            {IconComponent && <IconComponent />}
            <h3 className="title">{title}</h3>
            {children}
        </ButtonCardLikeStyles>
    )
}