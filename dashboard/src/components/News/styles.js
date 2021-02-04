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
      :hover{
        img{
          opacity: 0.1;
        }
      }
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
      button{
        position: absolute;
        top: 10px;
        right: 5px;
        z-index: 20;
        background: transparent;
        padding: 0;
        margin: 0;
        border: 0;
        :focus, :hover{
          background: transparent;
          border: 0;
          margin: 0;
        }
      }
      ul{
        font-family: Inter, sans-serif;
        li{
          font-size: 13.4px;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          :focus, :hover{
            color: #F1554C;
            background: #F3F5FB;
            svg{
              stroke: #F1554C;
            }
          }
          svg{
            transition: all 0.3s;
            width: 24px;
            stroke: #3F4359;
            margin-right: 20px;
          }
        }
      }
      >button >svg{
        width: 40px;
        fill: #B4B6BE;
        transition: all 0.3s;
        cursor: pointer;
      }
      img{
        width: 100%;
        height: 100%;
        position: absolute;
        transition: all 0.3s;
        border-radius: 10px;
        opacity: 0;
        top: 0;
        right: 0;
        object-fit: cover;
      }
    }
  }
`;