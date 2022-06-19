import React from 'react';
import { CommonProps } from 'types/commonProps';
import { HeroTextBlockStyle } from './HeroTextBlock.style';

interface Props extends CommonProps {
    title: string,
    description: string,
}

export const HeroTextBlock: React.FunctionComponent<Props> = ({ style, className, title, description }): JSX.Element => (
    <div>
        <HeroTextBlockStyle style={style} className={className}>
            <h1 className="title">{title}</h1>
            <p className="lead">{description}</p>
        </HeroTextBlockStyle>
    </div>
);
