import styled from 'styled-components';

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
  -webkit-user-drag: none;
`;