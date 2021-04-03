import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  input {
    outline: none;
  }

  button {
    outline: none;
  }

  body, #root {
    height: 100vh;
  }
`;

export default GlobalStyle;
