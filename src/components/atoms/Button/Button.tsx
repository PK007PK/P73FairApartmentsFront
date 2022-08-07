import React from 'react'
import { CommonProps } from "types/commonProps";
import { ButtonStyle } from "./Button.style";

interface Props extends CommonProps {
    type?: 'submit';
    disabled?: boolean;
}

export const Button: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {style, className, disabled, onClick, children, type} = props; 
    return (
        <ButtonStyle 
            type={type} 
            disabled={disabled} 
            style={style} 
            className={className} 
            onClick={onClick}
        >{children}</ButtonStyle>
    )
}