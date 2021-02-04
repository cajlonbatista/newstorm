import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background: ${props => props.theme.main};
  border-radius: 50px 0px 0px 50px;
  padding: 50px;
  header{
    
  }
`;

export const Search = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  div{
    width: 100%;
    max-width: 400px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    svg{
      position: absolute;
      top: 11px;
      left: 15px;
      width: 17px;
      height: 17px;
      stroke: #9CA6CA;
    }
    input{
      width: 100%;
      height: 100%;
      background: #FFF;
      border: 2px solid transparent;
      outline: none;
      padding: 0px 40px;
      font-family: Inter, sans-serif;
      border-radius: 10px;
      transition: all 0.3s;
      :focus{
        border-color: #9CA6CA;
      }
    }
    input:focus + svg{
      fill: #F1554C;
    }
  }
`;