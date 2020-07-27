import { createGlobalStyle } from 'styled-components';

import piersBold from './PierSans-Bold.otf';
import piersBoldItalic from './PierSans-BoldItalic.otf';
import piersItalic from './PierSans-Italic.otf';
import piersRegular from './PierSans-Regular.otf';

console.log('logging font import');
console.log(piersBold);

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