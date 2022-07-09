import React from 'react'
import { CommonProps } from "types/commonProps";
import { ButtonStyle } from "./Button.style";

interface Props extends CommonProps {}
export const Button: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {style, className, onClick, children} = props; 
    return (
        <ButtonStyle style={style} className={className} onClick={onClick}>{children}</ButtonStyle>
    )
}