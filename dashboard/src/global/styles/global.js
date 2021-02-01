import { injectGlobal } from 'vue-styled-components';

const GlobalStyles = injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto&display=swap');
  body{
    background: #18191C;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar-thumb{
    background: #44474C;
  }
  ::-webkit-scrollbar{
    width: 4px;
    height: 4px;
    border-radius: 5px;
  }

  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  @keyframes bounced {
    0%{
      opacity: 0;
      transform: translateX(-600px);
    }
    100%{
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export default GlobalStyles;
