import React from 'react'
import { CommonProps } from "types/commonProps";
import { ButtonStyle } from "./Button.style";

interface Props extends CommonProps {
    type?: 'submit';
}

export const Button: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {style, className, onClick, children, type} = props; 
    return (
        <ButtonStyle type={type} style={style} className={className} onClick={onClick}>{children}</ButtonStyle>
    )
}