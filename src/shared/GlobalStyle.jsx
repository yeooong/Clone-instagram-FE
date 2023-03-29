import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    textarea {
        font-family: inherit;
        font-size: inherit;
    }

    button, input, textarea {
        border: none;
        background-color: inherit;
        cursor: pointer;
    }

    h1, p, button, input, label, ul, li {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none
    }
`;

export default GlobalStyle;
