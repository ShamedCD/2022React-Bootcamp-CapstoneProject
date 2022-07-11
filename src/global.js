import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background: rgb(205, 222, 255);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default Global;
