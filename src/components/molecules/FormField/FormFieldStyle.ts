import { ChangeEvent } from "react";
import styled from "styled-components";
import { CommonProps } from "types/commonProps";

interface Props extends CommonProps {
    as?: React.ElementType,
    // maxLength: number;
    // max: string;
    // min: string;
    // name: string;
    // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    // required: boolean;
    // type: string;
    // value: number | string;
}

export const WrapperStyle = styled.div<CommonProps>``;
export const TagStyle = styled.input<Props>``;