import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
    ${normalize}

    *:is(*, *::after, *::before, h1) {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
