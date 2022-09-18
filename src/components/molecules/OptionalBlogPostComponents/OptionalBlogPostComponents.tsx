import React from 'react';

import { CardContactForm } from '../CardContactForm/CardContactForm';
import { SocialShare } from '../SocialShare/SocialShare';

import { OptionalBlogPostComponentsStyle } from './OptionalBlogPostComponents.style';

interface Props {
    data: number[],
    excerpt: string,
    title: string,
}

export const OptionalBlogPostComponents: React.FunctionComponent<Props> = ({ data, title, excerpt }): JSX.Element => {
        
    return (
        <OptionalBlogPostComponentsStyle>
            {data.map((item, i) => {
                switch (item) {
                    case 0:
                        return <CardContactForm key={i} className="item" />;
                    case 1:
                        return <SocialShare key={i} className="item" title={title} excerpt={excerpt} messengerId={"1234"} />;
                    default:
                        break;
                }
            })}
        </OptionalBlogPostComponentsStyle>
    )
};

