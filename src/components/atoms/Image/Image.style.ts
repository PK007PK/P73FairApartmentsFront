import styled from "styled-components";

interface Props {
    alt: string;
    src: string;
}

export const ImageStyle = styled.img<Props>`
    display: block;
    height: 100%;
    min-height: 220px;
    width: 100%;
`