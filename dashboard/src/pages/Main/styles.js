import styled from 'vue-styled-components';

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #18191C;
  padding: 10px 20px;
  animation: bounced 0.3s linear;
  >article{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  main{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  main section{
    width: 100%;
    background-color: #1E2023;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
      font-family: Inter, sans-serif;
      color: #F4F4F4;
      margin-bottom: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 80%;
    }
    p{
      font-family: Nunito, sans-serif;
      color: #B5B5B5;
      margin-bottom: 20px;
    }
    button{
      width: 100%;
      max-width: 240px;
      display: block;
      margin: 5px auto;
      border: 2px solid transparent;
      color: #F4F4F4;
      background: #11A36C;
      padding: 10px 20px;
      border-radius: 5px;
      transition: all 0.3s;
      font-family: Inter, sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      font-weight: 600;
      outline: none;
      cursor: pointer;
      :hover{
        background: #14BD7C;
        color: #FFFFF0;
      }
      :focus{
        border-color: #FFFFF0;
      }
    }
  }
`;
