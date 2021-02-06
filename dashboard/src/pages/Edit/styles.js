import styled from 'styled-components';

import { makeStyles } from '@material-ui/core';
import { trans } from '../../global/animations/animations';

export const EditContainer = styled.main`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background: ${props => props.theme.main};
  border-radius: 50px 0px 0px 50px;
  padding: 50px;
  -webkit-user-select: none;
  -webkit-app-region: no-drag;
  animation: ${trans} 0.4s backwards;
  -webkit-user-drag: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  >div:first-child{
    div{
      width: 100%;
    }
  }
  form{
    margin-top: 40px!important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px auto;
    background: #232228;
    padding: 20px 70px;
    border-radius: 10px;
  }
  >form{
    width: 100%;
    max-width: 800px;
    >div{
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      label{
        font-family: Inter, sans-serif;
        font-size: 14px;
        margin-right: 10px;
        color: #BEBEBF;
      }
      input{
        width: 100%;
        height: 40px;
        background: #313139;
        border: 2px solid transparent;
        outline: none;
        color: #BEBEBF;
        margin-top: 5px;
        padding: 8px 14px;
        font-family: Inter, sans-serif;
        border-radius: 10px;
        transition: all 0.3s;
        :focus{
          border-color: #9CA6CA;
        }
      }
    }
    >button{
      width: 100%;
      margin-top: 40px!important;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-family: Inter, sans-serif;
      font-size: 14px;
      border: 2px solid transparent;
      background: #20BFA9;
      text-transform: uppercase;
      font-weight: 600;
      color: #f5f5f5;
      max-width: 300px;
      transition: all 0.3s;
      margin: 0px auto;
      :hover{
        opacity: 0.8;
        background: #1DB09C;
      }
      :focus{
        border-color: #FFF;
      }
    }
  }
  section{
    width: 100%;
    height: 100%;
  }
  section form{
    width: 100%;
    max-width: 1000px;
    textarea{
      width: 100%;
      resize: none;
      height: 100%;
      min-height: 450px;
      background: #313139;
      border: 2px solid transparent;
      outline: none;
      color: #BEBEBF;
      margin-top: 10px;
      padding: 8px 14px;
      font-family: Inter, sans-serif;
      border-radius: 10px;
      transition: all 0.3s;
      :focus{
        border-color: #9CA6CA;
      }
    }
    div:first-child{
      font-size: 14px;
      color: #FFF;
      text-transform: lowercase;
    }
    main >div{
      width: 100%;
      height: 100%;
      min-height: 450px;
      background: #313139;
      border: 2px solid transparent;
      outline: none;
      color: #BEBEBF;
      margin-top: 10px;
      padding: 8px 14px;
      font-family: Inter, sans-serif;
      border-radius: 10px;
      transition: all 0.3s;
    }
    >button{
      width: 100%;
      margin-top: 40px!important;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-family: Inter, sans-serif;
      font-size: 14px;
      border: 2px solid transparent;
      background: #20BFA9;
      text-transform: uppercase;
      font-weight: 600;
      color: #f5f5f5;
      max-width: 300px;
      transition: all 0.3s;
      margin: 0px auto;
      :hover{
        opacity: 0.8;
        background: #1DB09C;
      }
      :focus{
        border-color: #FFF;
      }
    }
    >button:last-child{
      background: transparent;
      margin-top: 10px!important;
      margin-bottom: 10px!important;
    }
  }
`;

export const useStyles = makeStyles({
  progress: {
    maxWidth: 600,
    flexGrow: 1,
    background: '#232228',
    padding: '10px 20px',
    borderRadius: 5,
    margin: '10px auto',
    color: '#f00'
  },
});