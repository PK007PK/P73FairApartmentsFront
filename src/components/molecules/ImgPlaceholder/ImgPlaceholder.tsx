import React from 'react'
import { Logo } from "components";
import { CommonProps } from 'types/commonProps';
import { ImgPlaceholderStyle } from "./ImgPlaceholder.style";

interface Props extends CommonProps {}

export const ImgPlaceholder: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {style, className} = props;
    return (
        <ImgPlaceholderStyle style={style} className={className}>
            <Logo />
        </ImgPlaceholderStyle>
    )
}