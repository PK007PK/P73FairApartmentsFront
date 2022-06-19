import { AccordionStyles } from "./Accordion.styles";
import React from 'react'
import { CommonProps } from "types/commonProps";
import { Title } from "../Title/Title";

interface Props extends CommonProps {
    title?: string,
    data: {
        title: string,
        description: string,
    }[],
}

export const Accordion: React.FunctionComponent<Props> = (props): JSX.Element => {
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