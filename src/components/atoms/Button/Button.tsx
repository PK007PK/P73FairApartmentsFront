import React from 'react'
import { CommonProps } from 'src/types/commonProps';

import { ButtonStyle } from "./Button.style";

export interface ButtonStylingProps extends CommonProps {
    full?: boolean,
    secondary?: boolean,
    type?: 'submit',
    disabled?: boolean,
}

export interface ButtonProps extends ButtonStylingProps {}

export const Button: React.FunctionComponent<ButtonProps> = (props): JSX.Element => {
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