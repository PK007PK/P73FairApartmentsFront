import styled from 'styled-components';

export const ModalStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;

    @keyframes intro {
        0% {
            opacity: 0.5;
            top: 55%;
        }
        100% {
            opacity: 1;
            margin-bottom: 0px;
            top: 50%;
        }
    }

    .modal {
        width: 90%;
        max-width: 700px;
        border-radius: var(--borderRadiusBasic);
        animation: intro 0.4s ease;
        padding: var(--spacingMedium);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.98);
        box-shadow: 8px -5px 25px -10px rgba(0, 0, 0, 0.3);
        z-index: 2000;
    }

    .topWrapper {
        margin-bottom: var(--spacingRegular);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .title {
        color: white;
        font-size: var(--fontSizeBigX1);
        outline: none;
        border: none;
    }

    .exitButton {
        background-color: rgba(0, 0, 0, 0.98);
        outline: none;
        border: none;

        &:hover .exitIcon,
        &:focus .exitIcon {
            color: var(--darkOrange);
        }
    }

    .exitIcon {
        color: white;
        width: 40px;
        height: 40px;
    }
`;
