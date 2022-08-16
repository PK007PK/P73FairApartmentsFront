import React, { ChangeEvent } from 'react'
import { CommonProps } from "types/commonProps";
import { WrapperStyle, TagStyle } from "./FormFieldStyle";

interface Props extends CommonProps {
    label: string;
    maxLength?: number;
    max?: string;
    min?: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    tag?: React.ElementType,
    type?: string;
    value: number | string;
}

export const FormField: React.FunctionComponent<Props> = (props) => {
    const {
        tag,
        label,
        maxLength,
        max,
        min,
        name,
        required,
        type,
        value,
        onChange,
    } = props;
    return (
        <WrapperStyle>
            <label>
                {label}<br/>
                <TagStyle
                    as={tag}
                    type={type}
                    name={name}
                    required={required}
                    maxLength={maxLength}
                    value={value}
                    onChange={onChange}
                    min={min}
                    max={max}
                />
            </label>
        </WrapperStyle>
    )
}