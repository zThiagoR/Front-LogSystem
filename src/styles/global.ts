import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #1B111C;
    font-size: 14px;
    color: #fff;
    font-family: Arial, sans-serif;
    transition: all 0.40s ease;
  }
`;