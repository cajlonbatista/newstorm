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
`;
