import React from 'react'
import { CommonProps } from "types/commonProps"
import { PictureForHeaderStyle } from './PictureForHeader.style';

interface Props extends CommonProps {
    src?: string;
}

export const PictureForHeader: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {src} = props;

    return (
        <PictureForHeaderStyle src={src} />
    )
}