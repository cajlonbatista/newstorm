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
      color: #F1F1F1;
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
      background: #202028;
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
        color: #20BFA9;
        font-weight: 500;
      }
      h1{
        font-family: Inter, sans-serif;
        color: #E1E0E2;
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
        background: #232228;
        li{
          font-size: 13.4px;
          transition: all 0.3s;
          display: flex;
          background: #232228;
          align-items: center;
          justify-content: flex-start;
          color: #B8B7B9;
          :focus, :hover{
            color: #F1554C;
            background: #232228;
            svg{
              stroke: #F1554C;
            }
          }
          svg{
            transition: all 0.3s;
            width: 24px;
            stroke: #B8B7B9;
            margin-right: 20px;
          }
        }
      }
      >button >svg{
        width: 40px;
        fill: #E2E2E2;
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

export const ViewCard = styled.main`
  width: 600px;
  height: 300px;
  padding: 20px;
  @media(max-width: 1279px){
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0px solid #DFDDD4;
    padding-bottom: 10px;
    svg{
      width: 35px;
      margin-right: 25px;
      stroke: #DFDDD4;
    }
  }
  footer{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button:first-child{
      margin-right: 20px;
      background: transparent;
      border-color: #20bfa9;
      color: #20bfa9;
    }
    button:last-child{
      background: #E24C4B;
      color: #F5F5F5;
    }
    button{
      padding: 7px 20px;
      font-family: Inter, sans-serif;
      font-size: 13.4px;
      border: 2px solid transparent;
      transition: all 0.3s;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      :hover{
        opacity: 0.9;
      }
      :focus{
        border-color: #FFF;
        color: #FFF;
      }
    }
  }
  h1{
    color: #DFDDD4;
    text-align: center;
    font-family: Nunito, sans-serif;
    font-size: 18px;
    font-weight: 700;
  }
`;