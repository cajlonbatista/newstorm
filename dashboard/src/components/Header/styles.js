import styled from 'styled-components';

import { jello } from '../../global/animations/animations';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  >a:first-child{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    svg{
      border-radius: 20px;
    }
  }
  div{
    padding-top: 100px;
    a{
      margin: 20px auto;
      width: 100%;
      border-left: 4px solid transparent;
      display: flex;
      padding: 15px 0px;
      justify-content: center;
      border-radius: 2px;
      align-items: center;
      :hover{
        svg{
          animation: ${jello} 0.5s linear;
        }
      }
      svg{
        width: 27px;
      }
    }
  }
  >a:last-child{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    :hover{
      svg{ 
        stroke: #e24c4b;
      }
    }
    svg{
      width: 27px;
      stroke: #9CA6CA;
      transition: all 0.3s;
    }
  }
`;
