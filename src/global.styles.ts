import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${ props => props.theme.color.bg.body };
    color: ${ props => props.theme.color.text.black };
    font-family: Arial, Helvetica, sans-serif;
  }
`;
