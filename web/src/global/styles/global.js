import { injectGlobal } from 'vue-styled-components';

const GlobalStyles = injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default GlobalStyles;
