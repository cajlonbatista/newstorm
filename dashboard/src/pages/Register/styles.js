import styled from 'vue-styled-components';

import goals from '../../assets/svg/goals.svg';

export const RegisterContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #18191C;
  padding: 10px 20px;
  animation: bounced 0.3s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${goals});
  overflow-x: hidden;
  overflow-y: auto;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center right;
  @media(max-width: 800px){
    background-image: none;
  }
  form{
    width: 100%;
    height: 100%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    span{
      display: block;
      width: 100%;
      font-family: Exo, sans-serif;
      font-weight: 500;
      color: #41B883;
      font-size: 20px;
      text-transform: uppercase;
      text-align: center;
      margin: 10px 30px;
    }
    footer{
      width: 100%;
      padding-top: 30px;
    }
    button, a{
      width: 100%;
      max-width: 240px;
      display: block;
      margin: 5px auto;
      border: 2px solid transparent;
      color: #B5B5B5;
      background: #1E2023;
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
        color: #18e295;
      }
      :focus{
        border-color: #18e295;
      }
    }
    button:first-child{
      display: flex;
      align-items: center;
      text-decoration: none;
      justify-content: center;
      background: #11A36C;
      margin-bottom: 20px;
      color: #F4F4F4;
      :hover{
        background: #14BD7C;
        color: #FFFFF0;
      }
      :focus{
        border-color: #FFFFF0;
      }
    }
    article{
      width: 90%;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: 10px;
      border-top: 5px solid #41B883;
      >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        textarea{
          height: 400px;
          overflow: auto;
        }
        div{
          background: #141417;
          height: 400px;
          overflow: auto;
          margin: 10px auto;
          padding: 10px;
          border-radius: 5px;
          color: #B5B5B5;
          font-family: Inter, sans-serif;
        }
      }
    }
    section{
      width: 90%;
      max-width: 600px;
    }
    section, article{
      margin: 10px auto;
      padding: 10px 30px;
      border-radius: 5px;
      background: #1E2023;
      border-top: 5px solid #18e295;
      div{
        width: 100%;
        margin: 20px auto;
        input, textarea{
          resize: none;
          width: 100%;
          font-family: Inter, sans-serif;
          padding: 8px 10px;
          transition: all 0.3s;
          border-radius: 5px;
          margin-top: 10px;
          background: #141417;
          color: #FFFFF0;
          font-size: 14px;
          border: 2px solid transparent;
          outline: none;
          :focus{
            border-color: #18e295;
          }
        }
        label{
          font-family: Poppins, sans-serif;
          font-size: 14px;
          color: #B5B5B5;
        }
      }
    }

  }

`;
