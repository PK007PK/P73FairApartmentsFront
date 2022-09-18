import styled from 'styled-components';

export const CardMapStyle = styled.div`
    height: 100%;
    min-height: 220px;
    width: 100%;
    background-color: var(--colorActivePrimary);

    .marker {
        background-image: url('mapbox-icon.png');
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }
`;
