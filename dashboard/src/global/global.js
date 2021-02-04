import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  * {
    box-sizing: border-box;   
    outline: none;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background};
    overflow: hidden;
  }
`;

export default GlobalStyle;
