import React from 'react'
import { CommonProps } from "types/commonProps";
import { ButtonStyle } from "./Button.style";

export interface Props extends CommonProps {
    disabled?: boolean;
    full?: boolean;
    secondary?: boolean;
    type?: 'submit';
}

export const Button: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {
        disabled,
        className, 
        children,
        full, 
        onClick,
        secondary, 
        style,
        type,
    } = props; 
    return (
        <ButtonStyle 
            disabled={disabled} 
            className={className} 
            full={full}
            onClick={onClick}
            secondary={secondary}
            style={style} 
            type={type} 
        >{children}</ButtonStyle>
    )
}