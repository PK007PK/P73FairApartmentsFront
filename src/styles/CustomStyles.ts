import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`

.displayStoriesWrapper {
  width: 100%;
  height: 500px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  &--100vh {
    min-height: 100vh;
  }
}

.slick-slide {
  padding: 0 2px;
}

.lead {
  font-size: var(--fontSizeLead);
  font-weight: 400;
}

.fx-txt-underline {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -3px;
      left: 0;
      background-color: var(--colorActiveSecondary);
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.1s ease-in-out;
    }     

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }

    &:focus {
      outline: none !important;
      border: none !important;
    }

    &:focus::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

export default CustomStyles;
