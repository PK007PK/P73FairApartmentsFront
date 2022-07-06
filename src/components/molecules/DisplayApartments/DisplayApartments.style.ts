import styled from "styled-components";

interface Props {
    boxes: boolean
}

export const DisplayApartmentsStyle = styled.div<Props>`

    ${({ boxes }) =>
        boxes &&
        `
            {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
    `}

`