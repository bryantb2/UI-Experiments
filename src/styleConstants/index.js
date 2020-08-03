import { createGlobalStyle } from 'styled-components';

import piersBold from './PierSans-Bold.otf';
import piersBoldItalic from './PierSans-BoldItalic.otf';
import piersItalic from './PierSans-Italic.otf';
import piersRegular from './PierSans-Regular.otf';

console.log('logging font import');
console.log(piersBold);

// global css styles
export default createGlobalStyle`
    @font-face {
        font-family: 'Piers-Bold';
        src: url(${piersBold});
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Piers-Bold-Italic';
        src: url(${piersBoldItalic});
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Piers-Italic';
        src: url(${piersItalic});
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Piers-Regular';
        src: url(${piersRegular});
        font-weight: normal;
        font-style: normal;
    }
`;

// theme provider setup
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

const devices = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export const theme = {
    screenQueries: devices
}

