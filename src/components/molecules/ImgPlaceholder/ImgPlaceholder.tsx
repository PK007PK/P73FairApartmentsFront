import React from 'react'

import { Logo } from 'src/components/atoms/Logo/Logo';

import { CommonProps } from 'src/types/commonProps';
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