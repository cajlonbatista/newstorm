import styled from 'styled-components';

export const LastNewsContainer = styled.article`
  padding: 20px;
  >div:first-child{
    width: 100%;
    display: flex;
    align-items: center;
    h1{
      font-family: Inter, sans-serif;
      margin-right: 25px;
      color: #3F4359;
    }
    >div{
      width: 70%;
      height: 1px;
      background: #B2B4C0;
    }
    span{
      font-family: Inter, sans-serif;
      font-size: 13.5px;
      color: #B2B4C0;
      margin-left: 25px;
    }
  }
  article{
    display: grid;
    grid-template-columns: repeat( auto-fill, min(100%, 470px) );
    grid-gap: 10px;
    >div{
      padding: 20px;
      border-radius: 10px;
      background: #FFF;
      position: relative;
      transition: all 0.3s;
      span{
        font-family: Inter, sans-serif;
        font-size: 13.5px;
        color: #B4B6BE;
        font-weight: 500;
      }
      h1{
        font-family: Inter, sans-serif;
        color: #494D62;
        text-align: left;
        font-weight: 600;
        max-width: 70%;
      }
      svg{
        width: 40px;
        position: absolute;
        top: 10px;
        right: 5px;
        cursor: pointer;
      }
    }
  }
`;