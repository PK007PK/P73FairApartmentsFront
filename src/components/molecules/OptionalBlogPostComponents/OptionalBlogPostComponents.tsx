import React from 'react';
import { OptionalBlogPostComponentsStyle } from './OptionalBlogPostComponents.style';

import { CardContactForm } from 'components/molecules/CardContactForm/CardContactForm';
import { Newsletter } from 'components/organisms/Newsletter/Newsletter';
import { SocialShare } from 'components/molecules/SocialShare/SocialShare';

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
                        return <SocialShare key={i} className="item" title={title} excerpt={excerpt} messengerID={"1234"} />;
                    case 2:
                        return <Newsletter key={i} className="item" />;
                    default:
                        break;
                }
            })}
        </OptionalBlogPostComponentsStyle>
    )
};

