import styled from 'styled-components';

export const BarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  -webkit-user-select: none;
  background: #171717;
  >div:first-child{
    -webkit-app-region: drag;
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
      width: 18px;
      height: 18px;
    }
  }
  article{
    -webkit-app-region: drag;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter, sans-serif;
    width: 100%;
    span{
      font-size: 14px;
      color: #626470;
    }
  }
  >div:last-child{
    width: 140px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        width: 12px;
      }
    }
  }
`;