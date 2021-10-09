import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ::root {
    --default-color-white: #ffffff;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyles;
