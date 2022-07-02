import React from 'react'
import { Logo } from "components/atoms/Logo/Logo";
import { ImgPlaceholderStyle } from "./ImgPlaceholder.style";
import { CommonProps } from 'types/commonProps';

interface Props extends CommonProps {}

export const ImgPlaceholder: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {style, className} = props;
    return (
        <ImgPlaceholderStyle style={style} className={className}>
            <Logo />
        </ImgPlaceholderStyle>
    )
}