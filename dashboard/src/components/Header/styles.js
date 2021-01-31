import styled from 'vue-styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  background: #1E2023;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  overflow: auto;
  a{
    padding: 10px;
    display: grid;
    place-items: center;
    margin: 20px auto;
    border: 2px solid transparent;
    transition: all 0.3s;
    outline: none;
    border-radius: 3px;
    :hover, :focus{
      border-color: #18e295;
      background: #1E2023;
    }
    img{
      width: 35px;
    }
  }
`;
