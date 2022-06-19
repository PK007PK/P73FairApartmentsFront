import { createGlobalStyle } from 'styled-components';

const colors = `
    --colorWhite: #FFFFFF;
    --colorLightGray: #F4F4F4;
    --colorMediumGray: #E9ECEF;
    --colorDarkGray: #343A40;
    --colorActive: #ea5825;
    --colorActivePrimary: #006064;
    --colorActiveSecondary: #00BFA5;
    --colorBlack: #00000;
    
`;

const spacings = `
    --spacingXSmall: 8px;
    --spacingSmall: 15px;
    --spacingRegular: 25px;
    --spacingMedium: 40px;
    --spacingBig1: 70px;
    --spacingBig2: 100px;
`;

const fontSizes = `
    --fontSizeXSmall: 12px;
    --fontSizeSmall: 14px;
    --fontSizeRegular: 16px;
    --fontSizeLead: 20px;
    --fontSizeBig1: 32px;
    --fontSizeBig2: 40px;
    --fontSizeBig3: 50px;
`;

const fx = `
    --transitionFast: 0.3s ease-out;
    --transitionBasic: 0.4s ease-out;
    --transitionSlow: 0.5s ease-out;
    --animationBasic: 0.4s;
    --shadowBackground: rgb(0 0 0) 0 -200px 90px -110px inset;
    --shadowBackground2: rgb(0 0 0) 0 -220px 90px -110px inset;
    --txtShadow: 0 1px 1px rgb(0 0 0 / 20%);
    --txtShadowStrong: 0 1px 1px rgb(0 0 0 / 60%);
    --hoverShadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
`;

const cardVariables = `
    --cardHeight: 400px;
    --cardPadding: var(--spacingRegular);
    --cardDefaultBackgroundColor: var(--colorDarkGray);
    --cardDefaultColor: white;
    --borderRadius: 10px;
`;

const inputsVariables = `
    --paddingInput: 5px;
`;

const GlobalStyles = createGlobalStyle`
/* @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
} */

html {
    ${colors}
    ${spacings}
    ${fontSizes}
    ${fx}
    ${cardVariables}
    ${inputsVariables}
    
    /* scroll-behavior: smooth; */
    box-sizing: border-box;
    font-size: 10px;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    padding: 0;
    margin: 0;
    font-size: 1.5em;
    line-height: 2;
    
}

a {
    text-decoration: none;
    color: var(--colorBlack);
}

a:hover {
    text-decoration: underline;
}

button {
    cursor: pointer;
}


`;

export default GlobalStyles;
