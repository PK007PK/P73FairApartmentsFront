import React, { ChangeEvent } from 'react'
import { CommonProps } from 'src/types/commonProps';
import { Title } from '../Title/Title';

import { WrapperStyle, TagStyle } from "./FormFieldStyle";

export interface FormFieldStylingProps extends CommonProps {
    as?: React.ElementType,
}

interface FormFieldProps extends FormFieldStylingProps {
    as?: React.ElementType,
    disabled?: boolean;
    label: string;
    labelCenter?: boolean;
    max?: string;
    maxLength?: number;
    min?: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    type?: string;
    value: number | string;
}

export const FormField: React.FunctionComponent<FormFieldProps> = (props) => {
    const {
        as,
        className,
        disabled,
        label,
        labelCenter,
        max,
        maxLength,
        min,
        name,
        onChange,
        placeholder,
        required,
        style,
        type,
        value,
    } = props;

    return (
        <WrapperStyle style={style} className={className}>
            <label>
                <Title as="h4" className="title" center={labelCenter}>{label}</Title>
                <TagStyle
                    as={as}
                    disabled={disabled}
                    type={type}
                    name={name}
                    placeholder={placeholder}
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