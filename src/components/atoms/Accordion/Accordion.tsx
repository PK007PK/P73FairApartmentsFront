import React from 'react'
import { CommonProps } from 'src/types/commonProps';
import { Title } from '../Title/Title';

import { AccordionStyles } from "./Accordion.styles";

export interface AccordionStylingProps extends CommonProps {}

interface AccordionProps extends AccordionStylingProps {
    title?: string,
    data: {
        title: string,
        description: string,
    }[],
}

export const Accordion: React.FunctionComponent<AccordionProps> = (props): JSX.Element => {
    const {title, data} = props;

    return (
        <AccordionStyles>
            {title ? <Title as="h3" >{title}</Title> : null}
            <div className="wrapper">
                {data.map(item => 
                    <details key={item.title} className="item">
                        <summary className="itemTitle">
                            {item.title}
                        </summary>
                        <div className="descWrapper">
                            <p className="description">{item.description}</p>
                        </div>
                    </details>)
                }
            </div>
        </AccordionStyles>
    )
}