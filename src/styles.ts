import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f8f8f8;
        color: #29292e;
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', sans-serif;

        &:focus {
            outline-color: #a8a8b3;
        }
    }
`;

export default GlobalStyle;
