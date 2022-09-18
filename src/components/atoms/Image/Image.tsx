import React from 'react'
import { CommonProps } from "src/types/commonProps"
import { ImageStyle } from './Image.style';

interface Props extends CommonProps {
    src: string;
    alt: string;
}

export const Image: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {src, alt, style, className} = props;

    return (
        <ImageStyle src={src} alt={alt} style={style} className={className}/>
    )
}