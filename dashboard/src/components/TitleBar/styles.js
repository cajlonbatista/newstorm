import styled from 'styled-components';

export const BarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  -webkit-user-select: none;
  background: #171717;
  -webkit-app-region: drag;
  >div:first-child{
    padding: 5px 10px;
    i{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    svg{
      width: 16px;
      height: 16px;
    }
  }
  article{
    -webkit-app-region: drag;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Inter, sans-serif;
    width: 100%;
    span{
      font-size: 13px;
      color: #626470;
    }
  }
  >div:last-child{
    width: 140px;
    height: 100%;
    -webkit-app-region: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    div{
      width: 100%;
      height: 100%;
      transition: all 0.3s;
      :hover{
        background: #313139;
        svg rect{
          stroke: #F5F5F5;
        }
      }
    }
    div:last-child{
      :hover{
        background: #E24C4B;
      }
    }
    div i{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      svg{
        width: 10px;
      }
    }
  }
`;