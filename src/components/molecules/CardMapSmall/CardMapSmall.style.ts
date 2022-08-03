import styled from 'styled-components';

export const CardMapStyle = styled.div`
    width: 426px;
    height: 100%;
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
