import React, { FC } from 'react';
import { CommonProps } from 'types/commonProps';
import { CardSimpleStyles } from './CardSimple.styles';

interface Props extends CommonProps {
    data: {
        color?: string,
        backgroundColor?: string,
        projectName?: string,
    }
}

export const CardSimple: React.FunctionComponent<Props> = ({ data, className }): JSX.Element => {
    const { projectName: title, color, backgroundColor } = data;
    
    return (
        <CardSimpleStyles color={color} backgroundColor={backgroundColor} className={className}>
            <div className="textBlock">
                <h3 className="title">{title}</h3>
            </div>
        </CardSimpleStyles>
    );
};

