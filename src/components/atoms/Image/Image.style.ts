import styled from "styled-components";

interface Props {
    alt: string;
    src: string;
}

export const ImageStyle = styled.img<Props>`
    display: block;
    width: 100%;
    height: 100%;
`